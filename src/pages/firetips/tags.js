import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '../../components/firetip'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import RichPreview from '../../components/rich-preview'
import Taper from '../../components/taper'
import { A, H1, H2 } from '../../styled-tags'
import slugify from '../../utils/slugify'

export default ({ data }) => {
  const firetips = data.allMarkdownRemark.edges.map(({ node }) => node)

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
      <MetaTags
        title="Fire tips by tag"
      />

      <RichPreview
        permalink="/firetips/tags"
        title="Fire tips by tag"
      />

      <Taper>
        <H1>
          Fire tips by tag
        </H1>

        {tags.map(tag => (
          <React.Fragment
            key={`tag-${tag}`}
          >
            <H2>
              <A
                href={`/firetips/tags/${slugify(tag)}`}
              >
                Fire tips tagged “{tag}”
              </A>
            </H2>

            {firetipsByTag[tag].map(firetip => (
              <div
                className="margin-bottom-xl"
                key={`firetip-${firetip.fields.slug}`}
              >
                <Firetip
                  firetip={firetip}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "firetip"
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
            date
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
