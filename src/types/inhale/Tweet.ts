import type { Media } from './Media'
import type { TwitterUser } from './TwitterUser'

export type Tweet =
  | {
      author: TwitterUser
      url: string
      date: Date
      text: string
      has_media: false
    }
  | {
      author: TwitterUser
      url: string
      date: Date
      text: string
      has_media: true
      media: Media
    }
