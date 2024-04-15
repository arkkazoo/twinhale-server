import type { MediaCard } from './MediaCard'
import type { MediaPhoto } from './MediaPhoto'
import type { MediaVideo } from './MediaVideo'

export type Media = {
  media_type: 'photo' | 'video' | 'card'
  content_photo: MediaPhoto
  content_video: MediaVideo
  content_card: MediaCard
}
