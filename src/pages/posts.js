import React from 'react'
import { graphql } from 'gatsby'

import A from '../components/a'
import H1 from '../components/h1'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import P from '../components/p'
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

      <Taper>
        <H1>
          Blog
        </H1>

        <P>
          I write about design, development, and productivity. My <A href="/newsletter/">newsletter</A> contains shorter pieces, which you can find in the <A href="/newsletter/archive/">archive</A>.
        </P>
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
            permalink
            slug
          }
          frontmatter {
            categories
            excerpt
            title
          }
        }
      }
    }
  }
`
