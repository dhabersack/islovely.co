import React from 'react'

import Grid from './grid'
import PostTeaser from './post-teaser'

export default function PostTeasers({
  posts,
}) {
  return (
    <Grid>
      {posts.map(post => (
        <React.Fragment key={`post-teaser-${post.id}`}>
          <PostTeaser post={post} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
