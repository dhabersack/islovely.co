import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '../components/firetip'
import H1 from '../components/h1'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({
  data,
}) => {
  const firetips = data.allMdx.edges.map(({ node }) => node)

  const tagCounts = firetips.map(firetip => firetip.frontmatter.tags).flat(1).reduce((dictionary, tag) => ({
    ...dictionary,
    [tag]: (dictionary[tag] || 0) + 1
  }), {})

  const tagsSortedByCount = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips'
        }
      ]}
    >
      <MetaTags
        title="Fire tips"
      />

      <RichPreview
        permalink="/firetips/"
        title="Fire tips"
      />

      <Taper>
        <H1>
          Fire tips
        </H1>

        <div
          className={`
            flex
            flex-wrap
            mb-24
          `}
        >
          {tagsSortedByCount.map(tag => (
            <div
              className={`
                flex
                align-items-center
                mb-6
                mr-10
              `}
              key={`tag-${tag}`}
            >
              <Tag
                href={`/firetips/tags/${slugify(tag)}`}
              >
                {tag}
              </Tag>&nbsp;<span
                className={`
                  font-size-12-medium
                  text-gray-600
                `}
              >
                &times; {tagCounts[tag]}
              </span>
            </div>
          ))}
        </div>

        {firetips.map(firetip => (
          <div
            className="mb-60"
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
