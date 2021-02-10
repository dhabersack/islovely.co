import React from 'react'

import PostTeaser from './post-teaser'

export default ({
  posts,
}) => (
  <div className="grid gap-8 grid-cols-1 sm:gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:gap-4 2xl:grid-cols-4">
    {posts.map(post => (
      <React.Fragment key={`post-teaser-${post.id}`}>
        <PostTeaser post={post} />
      </React.Fragment>
    ))}
  </div>
)
