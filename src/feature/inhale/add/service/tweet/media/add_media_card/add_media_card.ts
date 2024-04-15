import type { MediaCard } from '@custom_types'
import { insert_media_card, insert_tweets_media_card } from '@feature/inhale/add/repository'
import type { PoolClient } from 'pg'

export async function add_media_card(client: PoolClient, tweet_id: number, card: MediaCard) {
  const card_id = await insert_media_card(client, card)
  await insert_tweets_media_card(client, tweet_id, card_id)
}
