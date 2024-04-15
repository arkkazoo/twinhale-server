import type { PoolClient } from 'pg'

export async function insert_tweets_tags(client: PoolClient, tweet_id: number, tag_ids: number[]) {
  const statement = 'INSERT INTO tweets_tags (tweet_id, tag_id) VALUES ($1, $2)'
  await Promise.all(
    tag_ids.map(async (tag_id) => {
      await client.query(statement, [tweet_id, tag_id])
    }),
  )
}
