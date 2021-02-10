import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'
import slugify from '../utils/slugify'

export default ({
  data,
  pageContext,
}) => {
  const posts = data.allPost.edges.map(({ node }) => node)

  const {
    category,
  } = pageContext

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories',
          url: '/categories'
        }, {
          label: category
        }
      ]}
    >
      <MetaTags title={`Posts in “${category}”`} />

      <RichPreview
        permalink={`/categories/${slugify(category)}`}
        title={`Posts in “${category}”`}
      />

      <h1>
        Posts in “{category}”
      </h1>

      <Breakout>
        <PostTeasers posts={posts} />
      </Breakout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($category: [String]) {
    allPost(
      filter: {
        frontmatter: {
          categories: {
            in: $category
          }
        }
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
          slug
        }
      }
    }
  }
`
