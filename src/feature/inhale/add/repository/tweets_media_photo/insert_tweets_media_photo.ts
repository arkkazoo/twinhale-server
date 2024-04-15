import type { PoolClient } from 'pg'

export async function insert_tweets_media_photo(client: PoolClient, tweet_id: number, photo_ids: number[]) {
  const statement = 'INSERT INTO tweets_media_photo (tweet_id, media_photo_id) VALUES ($1, $2)'
  await Promise.all(
    photo_ids.map(async (photo_id) => {
      return await client.query(statement, [tweet_id, photo_id])
    }),
  )
}
