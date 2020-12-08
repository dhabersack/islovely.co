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
}) => {
  const firetips = data.allMdx.edges.map(({ node }) => node)

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
          url: '/firetips/'
        }, {
          label: 'By tag'
        }
      ]}
    >
      <MetaTags
        title="Fire tips by tag"
      />

      <RichPreview
        permalink="/firetips/tags/"
        title="Fire tips by tag"
      />

      <Taper>
        <h1>
          Fire tips by tag
        </h1>

        {tags.map(tag => (
          <React.Fragment
            key={`tag-${tag}`}
          >
            <h2>
              <a
                href={`/firetips/tags/${slugify(tag)}`}
              >
                Fire tips tagged “{tag}”
              </a>
            </h2>

            {firetipsByTag[tag].map(firetip => (
              <div
                className="mb-60"
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
    allMdx(
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
          body
          fields {
            date
            slug
          }
          frontmatter {
            tags
            title
          }
        }
      }
    }
  }
`
