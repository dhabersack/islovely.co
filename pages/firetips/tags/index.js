import React from 'react'

import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import { getAllTagsWithFiretips } from '@/lib/api/firetip-tags'

export default function Tags({
  tags,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips',
    }, {
      label: 'By tag',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title="Fire tips by tag" />

      <RichPreview
        permalink="/firetips/tags"
        title="Fire tips by tag"
      />

      <h1>
        Fire tips by tag
      </h1>

      {tags.map(tag => (
        <React.Fragment key={`tag-${tag.slug}`}>
          <h2>
            <a href={tag.permalink}>
              Fire tips tagged “{tag.title}”
            </a>
          </h2>

          <div className="grid gap-6">
            {tag.firetips.map(firetip => (
              <React.Fragment key={`firetip-${firetip.slug}`}>
                <Firetip firetip={firetip} />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const tags = await getAllTagsWithFiretips()

  return {
    props: {
      tags,
    },
  }
}
