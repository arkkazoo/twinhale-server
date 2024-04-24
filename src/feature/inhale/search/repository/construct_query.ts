export const construct_query = () => {
  const segments = []
  segments.push('SELECT')
  segments.push('tweets.*,')
  segments.push('ARRAY_AGG(media_photo.file_path) AS photo_paths,')
  segments.push('media_video.file_path')
  segments.push('FROM tweets')

  segments.push('LEFT JOIN tweets_tags ON tweets.id = tweets_tags.tweet_id')
  segments.push('LEFT JOIN tags ON tweets_tags.tag_id = tags.id')

  segments.push('LEFT JOIN tweets_media_photo ON tweets.id = tweets_media_photo.tweet_id')
  segments.push('LEFT JOIN media_photo ON tweets_media_photo.media_photo_id = media_photo.id')

  segments.push('LEFT JOIN tweets_media_video ON tweets.id = tweets_media_video.tweet_id')
  segments.push('LEFT JOIN media_video ON tweets_media_video.media_video_id = media_video.id')

  segments.push('GROUP BY tweets.id, media_video.file_path')

  segments.push('ORDER by tweets.id DESC')
  segments.push('LIMIT 15')

  const statement = segments.join(' ')
  return statement
}
