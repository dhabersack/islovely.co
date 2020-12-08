import React from 'react'

import PostTeaser from './post-teaser'

export default ({
  posts,
}) => (
  <div
    className={`
      grid
      gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      2xl:grid-cols-4
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
