import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'

export default function Posts({
  data,
}) {
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
        description="I write about design, development, and productivity."
        imageSubpath="pages/posts"
        permalink="/posts"
        title="Blog"
      />

      <div className="mb-8">
        <h1>
          Blog
        </h1>

        <p>
          I write about design, development, and productivity. My <a href="/newsletter">weekly newsletter</a> contains many more and usually shorter pieces. Read all previous issues in the <a href="/newsletter/archive">archive</a>.
        </p>
      </div>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
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
