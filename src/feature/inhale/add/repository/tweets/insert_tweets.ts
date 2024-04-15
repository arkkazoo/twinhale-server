import type { Tweet } from '@custom_types'

import { pool } from '@db'
import { construct_query } from './construct_query'

/**
 *
 * @param tweet
 * @returns id of the table 'tweets'
 */
export async function insert_tweets(tweet: Tweet): Promise<number> {
  const [statement, params] = construct_query(tweet)
  const result = await pool.query(statement, params)
  const id = result.rows[0].id
  return id
}
