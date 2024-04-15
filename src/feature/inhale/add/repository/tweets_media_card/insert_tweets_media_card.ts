import type { PoolClient } from 'pg'

export async function insert_tweets_media_card(client: PoolClient, tweet_id: number, card_id: number) {
  const statement = 'INSERT INTO tweets_media_card (tweet_id, media_card_id) VALUES ($1, $2)'
  await client.query(statement, [tweet_id, card_id])
}
