import React from 'react'
import { graphql } from 'gatsby'

import Firetip from '../components/firetip'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import { H1 } from '../styled-tags'
import slugify from '../utils/slugify'

export default ({
  data,
}) => {
  const firetips = data.allMarkdownRemark.edges.map(({ node }) => node)

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
        permalink="/fire-tips"
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
            margin-bottom-m
          `}
        >
          {tagsSortedByCount.map(tag => (
            <div
              className={`
                flex
                align-items-center
                margin-bottom-xs
                margin-right-xs
              `}
              key={`tag-${tag}`}
            >
              <Tag
                href={`/firetips/tags/${slugify(tag)}`}
              >
                {tag}
              </Tag>&nbsp;<span
                className={`
                  color-gray-600
                  font-size-12-medium
                `}
              >
                &times; {tagCounts[tag]}
              </span>
            </div>
          ))}
        </div>

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
