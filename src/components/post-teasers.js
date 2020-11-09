import React from 'react'

import PostTeaser from './post-teaser'

export default ({
  posts,
}) => (
  <div
    className={`
      grid
      grid-columns-1
      grid-column-gap
      grid-row-gap-25
      s:grid-columns-2
      s:grid-row-gap-15
      m:grid-columns-3
      m:grid-row-gap-20
      l:grid-columns-4
    `}
  >
    {posts.map(post => (
      <PostTeaser
        key={`post-teaser-${post.id}`}
        post={post}
      />
    ))}
  </div>
)
