import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'

export default ({
  data,
}) => {
  const {
    body,
    frontmatter,
    permalink,
  } = data.project

  const {
    excerpt,
    title,
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects',
          url: '/projects'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    project(
      slug: {
        eq: $slug
      }
    ) {
      body
      frontmatter {
        excerpt
        title
      }
      permalink
    }
  }
`
