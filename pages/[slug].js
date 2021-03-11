import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import { getAllPages, getPageBySlug } from '@/lib/api/pages'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Page({
  description,
  mdxSource,
  permalink,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

  const breadcrumbs = [
    {
      label: title
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={description}
        title={title}
      />

      <RichPreview
        description={description}
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      {body}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug)

  return {
    props: page,
  }
}

export async function getStaticPaths() {
  const pages = await getAllPages()

  return {
    fallback: false,
    paths: pages.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
  }
}
