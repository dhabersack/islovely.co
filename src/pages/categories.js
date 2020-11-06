import React from 'react'
import { graphql } from 'gatsby'

import H1 from '../components/h1'
import H2 from '../components/h2'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const posts = data.allMdx.edges.map(({ node }) => node)

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
        <H1>
          Categories
        </H1>
      </Taper>

      {categories.map(category => (
        <React.Fragment
          key={`category-${category}`}
        >
          <Taper>
            <H2>
              {category} &times; {postsByCategory[category].length}
            </H2>
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
    allMdx(
      filter: {
        fields: {
          type: {
            eq: "post"
          }
        }
      }
    ) {
      edges {
        node {
          fields {
            date
            permalink
            slug
          }
          frontmatter {
            categories
            excerpt
            heroAlt
            heroCaption
            title
          }
        }
      }
    }
  }
`
