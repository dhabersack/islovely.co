import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '../../components/firetip'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import RichPreview from '../../components/rich-preview'
import slugify from '../../utils/slugify'

export default ({
  data,
  pageContext,
}) => {
  const firetips = data.allFiretip.edges.map(({ node }) => node)

  const {
    tag,
  } = pageContext

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

export const pageQuery = graphql`
  query($tag: [String]) {
    allFiretip(
      filter: {
        frontmatter: {
          tags: {
            in: $tag
          }
        }
      },
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          body
          slug
          frontmatter {
            tags
            title
          }
        }
      }
    }
  }
`
