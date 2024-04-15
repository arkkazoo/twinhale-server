import type { MediaPhoto } from '@custom_types'
import type { PoolClient } from 'pg'

import { insert_media_photo, insert_tweets_media_photo } from '@feature/inhale/add/repository'

export async function add_media_photo(client: PoolClient, tweet_id: number, photo: MediaPhoto) {
  const photo_ids = await insert_media_photo(client, photo)
  await insert_tweets_media_photo(client, tweet_id, photo_ids)
}
