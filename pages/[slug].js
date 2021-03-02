import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import { getAllPages, getPageBySlug } from '@/lib/api/pages'

export default function Page({
  page,
  source,
}) {
  const {
    description,
    figures,
    permalink,
    title,
  } = page

  const body = hydrate(source, {
    components: {
      Figure,
    }
  })

  return (
    <Layout
      breadcrumbs={[
        {
          label: title
        }
      ]}
    >
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

  const source = await renderToString(page.content, {
    components: {
      Figure,
    },
    scope: {
      figures: page.figures,
    }
  })

  return {
    props: {
      page,
      source,
    },
  }
}

export async function getStaticPaths() {
  const allPages = await getAllPages()

  return {
    paths: allPages.map(page => page.permalink),
    fallback: true,
  }
}
