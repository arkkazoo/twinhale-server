import type { PoolClient } from 'pg'

export async function insert_tags(client: PoolClient, tags: string[]): Promise<number[]> {
  const tag_ids: number[] = []
  const statement = 'INSERT INTO tags (name) VALUES ($1) on conflict (name) do update set name = $1 RETURNING id'
  await Promise.all(
    tags.map(async (tag) => {
      const result = await client.query(statement, [tag])
      tag_ids.push(result.rows[0].id)
    }),
  )
  return tag_ids
}
