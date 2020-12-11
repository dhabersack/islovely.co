import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const posts = data.allMdx.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog'
        }
      ]}
    >
      <MetaTags
        title="Blog"
      />

      <RichPreview
        permalink="/posts/"
        title="Blog"
      />

      <Taper
        className="mb-12"
      >
        <h1>
          Blog
        </h1>

        <p>
          I write about design, development, and productivity. My <a href="/newsletter/">newsletter</a> contains shorter pieces, which you can find in the <a href="/newsletter/archive/">archive</a>.
        </p>
      </Taper>

      <PostTeasers
        posts={posts}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fields: {
          type: {
            eq: "post"
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
          id
          fields {
            date
            hero {
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            permalink
          }
          frontmatter {
            categories
            excerpt
            heroAlt
            title
          }
        }
      }
    }
  }
`
