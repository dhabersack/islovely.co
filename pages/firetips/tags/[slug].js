import React from 'react'

import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import slugify from '@/lib/slugify'
import { getAllFiretips, getFiretipsByTag } from '@/lib/api/firetips'

export default function Tag({
  firetips,
  tag,
}) {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
        }, {
          label: 'By tag',
          url: '/firetips/tags'
        }, {
          label: tag
        }
      ]}
    >
      <MetaTags title={`Fire tips tagged “${tag}”`} />

      <RichPreview
        permalink={`/firetips/tags/${slugify(tag)}`}
        title={`Fire tips tagged “${tag}”`}
      />

      <h1>
        Fire tips tagged “{tag}”
      </h1>

      <div className="grid gap-6">
        {firetips.map(firetip => (
          <React.Fragment key={`firetip-${firetip.slug}`}>
            <Firetip firetip={firetip} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const firetips = await getFiretipsByTag(params.slug)

  return {
    props: {
      firetips,
      tag: params.slug,
    },
  }
}

export async function getStaticPaths() {
  const firetips = await getAllFiretips()

  const tags = [...new Set(firetips.map(firetip => firetip.tags).flat(1))]

  return {
    paths: tags.map(tag => `/firetips/tags/${slugify(tag)}`),
    fallback: true,
  }
}
