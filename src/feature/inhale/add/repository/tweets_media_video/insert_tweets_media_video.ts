import type { PoolClient } from 'pg'

export async function insert_tweets_media_video(client: PoolClient, tweet_id: number, video_id: number) {
  const statement = 'INSERT INTO tweets_media_video (tweet_id, media_video_id) VALUES ($1, $2)'
  await client.query(statement, [tweet_id, video_id])
}
