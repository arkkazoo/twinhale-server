import type { Media } from '@custom_types'
import type { PoolClient } from 'pg'
import { add_media_card } from './add_media_card'
import { add_media_photo } from './add_media_photo'
import { add_media_video } from './add_media_video'

export async function add_media(client: PoolClient, tweet_id: number, media: Media) {
  switch (media.media_type) {
    case 'photo': {
      await add_media_photo(client, tweet_id, media.content_photo)
      break
    }
    case 'card': {
      await add_media_card(client, tweet_id, media.content_card)
      break
    }
    case 'video': {
      await add_media_video(client, tweet_id, media.content_video)
      break
    }
  }
}
