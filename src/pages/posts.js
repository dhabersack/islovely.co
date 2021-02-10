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
  const posts = data.allPost.edges.map(({ node }) => node)

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
        description="I write about design, development, and productivity. My weekly newsletter contains shorter pieces. Read all previous issues in the archive."
      />

      <RichPreview
        permalink="/posts"
        title="Blog"
      />

      <div className="mb-12">
        <Taper>
          <h1>
            Blog
          </h1>

          <p>
            I write about design, development, and productivity. My <a href="/newsletter">weekly newsletter</a> contains shorter pieces. Read all previous issues in the <a href="/newsletter/archive">archive</a>.
          </p>
        </Taper>
      </div>

      <PostTeasers posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPost(
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          date
          frontmatter {
            author {
              avatar {
                childImageSharp {
                  fluid(maxWidth: 40) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              frontmatter {
                name
              }
            }
            categories
            excerpt
            heroAlt
            title
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          id
          permalink
        }
      }
    }
  }
`
