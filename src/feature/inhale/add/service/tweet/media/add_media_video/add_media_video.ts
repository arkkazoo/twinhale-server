import type { MediaVideo } from '@custom_types'
import { insert_media_video, insert_tweets_media_video } from '@feature/inhale/add/repository'
import type { PoolClient } from 'pg'

export async function add_media_video(client: PoolClient, tweet_id: number, video: MediaVideo) {
  const video_id = await insert_media_video(client, video)
  await insert_tweets_media_video(client, tweet_id, video_id)
}
