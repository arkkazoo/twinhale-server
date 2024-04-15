import type { Tweet } from '@custom_types'

export const construct_query = (tweet: Tweet): [string, any[]] => {
  // segments of the statement
  const segments: string[] = []
  const p_segments: string[] = []
  const params: any[] = []

  segments.push('INSERT INTO tweets')
  segments.push('(')

  p_segments.push('username', 'screen_name', 'icon_source')
  params.push(tweet.author.username, tweet.author.screen_name, tweet.author.icon_source)

  p_segments.push('url', 'date', 'text', 'has_media')
  params.push(tweet.url, tweet.date, tweet.text, tweet.has_media)

  if (tweet.has_media) {
    p_segments.push('media_type')
    params.push(tweet.media?.media_type)
  }

  segments.push(p_segments.join(', '))

  segments.push(')')
  segments.push('VALUES (')

  const d_segments = []
  for (let i = 1; i <= params.length; i++) {
    d_segments.push(`$${i.toString()}`)
  }
  segments.push(d_segments.join(', '))

  segments.push(')')
  segments.push('RETURNING id')

  const statement = segments.join(' ')

  return [statement, params]
}
