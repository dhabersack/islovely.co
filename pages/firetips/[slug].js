import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import Tag from '@/components/tag'
import slugify from '@/lib/slugify'
import { getAllFiretips, getFiretipBySlug } from '@/lib/api/firetips'

export default function Firetip({
  firetip,
  source,
}) {
  const {
    permalink,
    tags,
    title,
  } = firetip

  const body = hydrate(source)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags title={title} />

      <RichPreview
        imageSubpath="firetips"
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      {body}

      <div className="flex flex-wrap">
        {tags.map(tag => (
          <React.Fragment key={`tag-${tag}`}>
            <div className="mb-3 mr-2.5">
              <Tag href={`/firetips/tags/${slugify(tag)}`}>
                {tag}
              </Tag>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const firetip = await getFiretipBySlug(params.slug)

  const source = await renderToString(firetip.content)

  return {
    props: {
      firetip,
      source,
    },
  }
}

export async function getStaticPaths() {
  const firetips = await getAllFiretips()

  return {
    paths: firetips.map(({ permalink }) => permalink),
    fallback: true,
  }
}
