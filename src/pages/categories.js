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
      <MetaTags
        title="Categories"
      />

      <RichPreview
        permalink="/categories"
        title="Categories"
      />

      <Taper>
        <h1>
          Categories
        </h1>
      </Taper>

      {categories.map(category => (
        <React.Fragment
          key={`category-${category}`}
        >
          <Taper>
            <h2>
              {category} &times; {postsByCategory[category].length}
            </h2>
          </Taper>

          <PostTeasers
            posts={postsByCategory[category]}
          />
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
