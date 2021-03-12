import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostTeasers from '@/components/post-teasers'
import RichPreview from '@/components/rich-preview'
import { getAllCategories, getCategoryWithPostsBySlug } from '@/lib/api/post-categories'

export default function Category({
  permalink,
  posts,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Categories',
      url: '/categories'
    }, {
      label: title,
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title={`Posts in “${title}”`} />

      <RichPreview
        permalink={permalink}
        title={`Posts in “${title}”`}
      />

      <h1>
        Posts in “{title}”
      </h1>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const category = await getCategoryWithPostsBySlug(params.slug)

  return {
    props: category,
  }
}

export async function getStaticPaths() {
  const categories = await getAllCategories()

  return {
    fallback: false,
    paths: categories.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
  }
}
