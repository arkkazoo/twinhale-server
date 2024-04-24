import type { Inhale } from '@custom_types'
import type { Request, Response } from 'express'
import { select_tweets_default } from '../repository'

export async function get_latest_inhales(_req: Request, res: Response) {
  try {
    const result: Inhale[] = await select_tweets_default()
    return res.status(200).json(result)
  } catch (e) {
    console.error(e)
    return res.status(400)
  }
}
