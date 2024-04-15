import type { MediaCard } from '@custom_types'
import type { PoolClient } from 'pg'

/**
 *
 * @param client
 * @param card
 * @returns id of the table 'media_card'
 */
export async function insert_media_card(client: PoolClient, card: MediaCard): Promise<number> {
  const statement = 'INSERT INTO media_card (url, title, thumbnail_path) VALUES ($1, $2, $3) RETURNING id'
  const params: string[] = [card.url, card.title, card.thumbnail_path]
  const result = await client.query(statement, params)
  const id = result.rows[0].id
  return id
}
