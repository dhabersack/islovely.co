import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import slugify from '@/utils/slugify'

export default ({
  firetips,
}) => {
  const tags = [
    ...new Set(firetips.map(({ frontmatter }) => frontmatter.tags).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  const firetipsByTag = tags.reduce((object, tag) => ({
    ...object,
    [tag]: firetips.filter(({ frontmatter }) => frontmatter.tags.includes(tag))
  }), {})

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
        }, {
          label: 'By tag'
        }
      ]}
    >
      <MetaTags title="Fire tips by tag" />

      <RichPreview
        permalink="/firetips/tags"
        title="Fire tips by tag"
      />

      <h1>
        Fire tips by tag
      </h1>

      {tags.map(tag => (
        <React.Fragment key={`tag-${tag}`}>
          <h2>
            <a href={`/firetips/tags/${slugify(tag)}`}>
              Fire tips tagged “{tag}”
            </a>
          </h2>

          <div className="grid gap-6">
            {firetipsByTag[tag].map(firetip => (
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
  const firetips = getFiretipsGroupedByTag()

  return {
    props: {
      firetips,
    }
  }
}

export const pageQuery = graphql`
  query {
    allFiretip(
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          body
          date
          frontmatter {
            tags
            title
          }
          slug
        }
      }
    }
  }
`
