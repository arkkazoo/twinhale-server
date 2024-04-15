import type { Inhale } from '@custom_types'
import { pool } from '@db'
import { is_Inhale } from '@type_guard'
import type { Request, Response } from 'express'
import { insert_tags } from '../repository/tags'
import { insert_tweets_tags } from '../repository/tweets_tags'
import { add_tweet } from './tweet'

export async function add_inhale(req: Request, res: Response) {
  console.info('INFO: POST inhale request is recieved')
  const inhale: Inhale = req.body

  // validate
  try {
    if (!is_Inhale(inhale)) {
      console.info('INFO: POST request has invalid inhale data')
      res.status(400).json({ message: 'invalid inhale data' })
      return
    }
  } catch (e) {
    console.info('ERROR: error occured in inhale POST')
    console.error(e)
    res.status(400).json({ message: 'invalid inhale data' })
    return
  }

  // download media to local disk

  // insert record to database
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const tweet_id = await add_tweet(client, inhale.tweet)
    const tag_ids = await insert_tags(client, inhale.tags)
    await insert_tweets_tags(client, tweet_id, tag_ids)
    await client.query('COMMIT')
    res.status(201).json({ message: 'success' })
    console.info('INFO: POST inhale success')
  } catch (e) {
    console.info('INFO: POST inhale failed')
    console.error(e)
    await client.query('ROLLBACK')
    res.status(400).json({ message: 'invalid inhale data' })
  } finally {
    client.release()
  }
}
