import React from 'react'

import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import RichPreview from '@/components/rich-preview'
import { getPostsGroupedByCategory } from '@/lib/api/posts'

export default function Categories({
  postsGroupedByCategory,
  // posts,
}) {
  // const categories = [
  //   ...new Set(posts.map(({ frontmatter }) => frontmatter.categories).flat())
  // ].sort((a, b) => a.toLowerCase() > b.toLowerCase())
  //
  // const postsByCategory = categories.reduce((object, category) => ({
  //   ...object,
  //   [category]: posts.filter(({ frontmatter }) => frontmatter.categories.includes(category))
  // }), {})

  console.log({ postsGroupedByCategory })

  const breadcrumbs = [
    {
      label: 'Categories'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title="Categories" />

      <RichPreview
        permalink="/categories"
        title="Categories"
      />

      <h1>
        Categories
      </h1>

      {Object.entries(postsGroupedByCategory).map(([ categoryTitle, posts ]) => (
        <React.Fragment key={`category-${categoryTitle}`}>
          <h2>
            {categoryTitle} &times; {posts.length}
          </h2>

          <Breakout>
            <PostTeasers posts={posts} />
          </Breakout>
        </React.Fragment>
      ))}
    </Layout>
  )
}
export async function getStaticProps() {
  const postsGroupedByCategory = await getPostsGroupedByCategory()

  return {
    props: {
      postsGroupedByCategory,
    },
  }
}
