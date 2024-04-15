import type { MediaPhoto } from '@custom_types'
import type { PoolClient } from 'pg'

/**
 *
 * @param client
 * @param photo
 * @returns ids of the table 'media_photo'
 */
export async function insert_media_photo(client: PoolClient, photo: MediaPhoto): Promise<number[]> {
  const statement = 'INSERT INTO media_photo (file_path) VALUES ($1) RETURNING id'
  const results = await Promise.all(
    photo.file_paths.map(async (file_path) => {
      return await client.query(statement, [file_path])
    }),
  )
  const ids = []

  for (const result of results) {
    ids.push(result.rows[0].id)
  }
  return ids
}
