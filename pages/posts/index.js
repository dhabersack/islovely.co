import React from 'react'

import Breakout from '../../components/breakout'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import PostTeasers from '../../components/post-teasers'
import RichPreview from '../../components/rich-preview'
import { getAllPosts } from '../../lib/api/posts'

export default function Posts({
  posts,
}) {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog'
        }
      ]}
    >
      <MetaTags
        title="Blog"
        description="I write about design, development, and productivity. My weekly newsletter contains shorter pieces. Read all previous issues in the archive."
      />

      <RichPreview
        description="I write about design, development, and productivity."
        imageSubpath="pages/posts"
        permalink="/posts"
        title="Blog"
      />

      <div className="mb-8">
        <h1>
          Blog
        </h1>

        <p>
          I write about design, development, and productivity. My <a href="/newsletter">weekly newsletter</a> contains many more and usually shorter pieces. Read all previous issues in the <a href="/newsletter/archive">archive</a>.
        </p>
      </div>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
