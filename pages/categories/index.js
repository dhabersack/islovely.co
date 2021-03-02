import React from 'react'

import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import RichPreview from '@/components/rich-preview'
import { getAllPosts } from '@/lib/api/posts'

export default function Categories({
  posts,
}) {
  const categories = [
    ...new Set(posts.map(({ frontmatter }) => frontmatter.categories).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  const postsByCategory = categories.reduce((object, category) => ({
    ...object,
    [category]: posts.filter(({ frontmatter }) => frontmatter.categories.includes(category))
  }), {})

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories'
        }
      ]}
    >
      <MetaTags title="Categories" />

      <RichPreview
        permalink="/categories"
        title="Categories"
      />

      <h1>
        Categories
      </h1>

      {categories.map(category => (
        <React.Fragment key={`category-${category}`}>
          <h2>
            {category} &times; {postsByCategory[category].length}
          </h2>

          <Breakout>
            <PostTeasers posts={postsByCategory[category]} />
          </Breakout>
        </React.Fragment>
      ))}
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
