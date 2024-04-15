import type { MediaVideo } from '@custom_types'
import type { PoolClient } from 'pg'

/**
 *
 * @param client
 * @param video
 * @returns id of the table 'media_video'
 */
export async function insert_media_video(client: PoolClient, video: MediaVideo): Promise<number> {
  const statement = 'INSERT INTO media_video (file_path, thumbnail_path) VALUES ($1, $2) RETURNING id'
  const params: string[] = [video.file_path, video.thumbnail_path]
  const result = await client.query(statement, params)
  const id = result.rows[0].id
  return id
}
