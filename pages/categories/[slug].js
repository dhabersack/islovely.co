import React from 'react'

import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import RichPreview from '@/components/rich-preview'
import slugify from '@/lib/slugify'
import { getPostsByCategory } from '@/lib/api/posts'

export default function Category({
  category,
  posts,
}) {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories',
          url: '/categories'
        }, {
          label: category
        }
      ]}
    >
      <MetaTags title={`Posts in “${category}”`} />

      <RichPreview
        permalink={`/categories/${slugify(category)}`}
        title={`Posts in “${category}”`}
      />

      <h1>
        Posts in “{category}”
      </h1>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = getPostsByCategory(params.category)

  return {
    props: {
      category,
      posts,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
