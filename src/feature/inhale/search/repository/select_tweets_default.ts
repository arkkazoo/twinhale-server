import type { Inhale, Media, Tweet, TwitterUser } from '@custom_types'
import { pool } from '@db'
import { construct_query } from './construct_query'

/**
 *
 * @returns latest tweets
 */
export async function select_tweets_default(): Promise<Inhale[]> {
  const statement = construct_query()
  const result = (await pool.query(statement)).rows
  // console.info(result)
  const inhales: Inhale[] = result.map((record) => {
    return convert_record_to_inhale(record)
  })
  return inhales
}

function convert_record_to_inhale(record: any): Inhale {
  const user: TwitterUser = {
    username: record.username,
    screen_name: record.screen_name,
    icon_source: record.icon_source,
  }
  let tweet: Tweet
  if (record.has_media) {
    tweet = {
      author: user,
      url: record.url,
      date: record.date,
      text: record.text,
      has_media: record.has_media,
      media: convert_record_to_media(record),
    }
  } else {
    tweet = {
      author: user,
      url: record.url,
      date: record.date,
      text: record.text,
      has_media: record.has_media,
    }
  }
  const inhale = {
    tweet: tweet,
    date: new Date(),
    tags: [],
  }
  return inhale
}

function convert_record_to_media(record: any): Media {
  let media: Media
  if (record.media_type === 'photo') {
    media = {
      media_type: 'photo',
      content_photo: {
        file_paths: record.photo_paths,
      },
    }
  } else {
    media = {
      media_type: 'photo',
      content_photo: {
        file_paths: [],
      },
    }
  }
  return media
}
