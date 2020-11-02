import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '../../components/firetip'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import RichPreview from '../../components/rich-preview'
import Taper from '../../components/taper'
import slugify from '../../utils/slugify'

export default ({
  data,
  pageContext,
}) => {
  const firetips = data.allMarkdownRemark.edges.map(({ node }) => node)
  const { tag } = pageContext

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
        }, {
          label: 'by tag',
          url: '/firetips/tags'
        }, {
          label: tag
        }
      ]}
    >
      <MetaTags
        title={`Fire tips tagged “${tag}”`}
      />

      <RichPreview
        permalink={`/firetips/tags/${slugify(tag)}`}
        title={`Fire tips tagged “${tag}”`}
      />

      <Taper>
        <h1>Fire tips tagged “{tag}”</h1>

        {firetips.map(firetip => (
          <div
            className="margin-bottom-xl"
            key={`firetip-${firetip.fields.slug}`}
          >
            <Firetip
              firetip={firetip}
            />
          </div>
        ))}
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: [String]) {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "firetip"
          }
        }
        frontmatter: {
          tags: {
            in: $tag
          }
        }
      },
      sort: {
        fields: fields___date,
        order: DESC
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            title
          }
          html
        }
      }
    }
  }
`
