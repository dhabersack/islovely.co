import React from 'react'

import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import Tag from '@/components/tag'
import { getAllFiretips, getFiretipBySlug } from '@/lib/api/firetips'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Firetip({
  mdxSource,
  permalink,
  tags,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

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
        {tags.map(({
          permalink,
          title,
        }) => (
          <React.Fragment key={`tag-${title}`}>
            <div className="mb-3 mr-2.5">
              <Tag href={permalink}>
                {title}
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

  return {
    props: firetip,
  }
}

export async function getStaticPaths() {
  const firetips = await getAllFiretips()

  return {
    paths: firetips.map(({ permalink }) => permalink),
    fallback: true,
  }
}
