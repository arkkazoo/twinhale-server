import type { Tweet } from '@custom_types'
import { insert_tweets } from '@feature/inhale/add/repository'
import type { PoolClient } from 'pg'
import { add_media } from './media'

export async function add_tweet(client: PoolClient, tweet: Tweet): Promise<number> {
  const tweet_id = await insert_tweets(tweet)

  if (tweet.has_media) {
    await add_media(client, tweet_id, tweet.media)
  }

  return tweet_id
}
