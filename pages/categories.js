import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'

export default function Categories({
  data,
}) {
  const posts = data.allPost.edges.map(({ node }) => node)

  const categories = [
    ...new Set(posts.map(({ frontmatter }) => frontmatter.categories).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  const postsByCategory = categories.reduce((object, category) => ({
    ...object,
    [category]: posts.filter(({ frontmatter }) => frontmatter.categories.includes(category))
  }), {})

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Categories'
        }
      ]}
    >
      <MetaTags title="Categories" />

      <RichPreview
        permalink="/categories"
        title="Categories"
      />

      <h1>
        Categories
      </h1>

      {categories.map(category => (
        <React.Fragment key={`category-${category}`}>
          <h2>
            {category} &times; {postsByCategory[category].length}
          </h2>

          <Breakout>
            <PostTeasers posts={postsByCategory[category]} />
          </Breakout>
        </React.Fragment>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allPost {
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
            heroCaption
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
