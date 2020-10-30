import React from 'react'
import { graphql } from 'gatsby'

import Card from '../components/card'
import Emoji from '../components/emoji'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({ data }) => {
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
        title="Firetips"
      />

      <Taper>
        <h1>Fire tips</h1>

        <div className="flex flex-wrap margin-bottom-m">
          {tagsSortedByCount.map(tag => (
            <div
              className="flex align-items-center margin-bottom-xs margin-right-xs"
              key={`tag-${tag}`}
            >
              <span
                className="background-color-gray-200 border-radius-xxs color-gray-700 font-size-12-medium inline-block padding-xs visited:color-gray-700"
              >
                {tag}
              </span>&nbsp;<span
                className="color-gray-600 font-size-12-medium"
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
            <Card>
              <div className="padding-horizontal-s padding-vertical-s">
                <h2 className="font-size-16-short font-weight-600 margin-0 margin-bottom-s">
                  <a
                    className="color-gray-900 visited:color-gray-900"
                    href={`/firetips/${firetip.fields.slug}`}
                  >
                    <Emoji name=":fire:" />

                    {firetip.frontmatter.title}
                  </a>
                </h2>

                <div dangerouslySetInnerHTML={{ __html: firetip.html }} />

                <div>
                  {firetip.frontmatter.tags.map(tag => (
                    <span
                      className="background-color-gray-200 border-radius-xxs color-gray-700 font-size-12-medium inline-block margin-bottom-xxs margin-right-xxs nowrap padding-xs visited:color-gray-700"
                      key={`tag-${tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <footer className="background-color-gray-100 padding-horizontal-s padding-vertical-s">
                <p className="color-gray-600 font-size-12-medium margin-0">
                  <span className="margin-right-xxs">
                    Permalink:
                  </span>

                  <a href={`/firetips/${firetip.fields.slug}`}>
                    islovely.co/firetips/{firetip.fields.slug}
                  </a>
                </p>
              </footer>
            </Card>
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
