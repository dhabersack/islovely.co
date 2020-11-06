import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import H1 from '../components/h1'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = data.mdx

  const {
    permalink,
  } = fields

  const {
    description,
    title,
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: title
        }
      ]}
    >
      <MetaTags
        description={description}
        title={title}
      />

      <RichPreview
        description={description}
        permalink={permalink}
        title={title}
      />

      <Taper>
        <H1>
          {title}
        </H1>

        <MDXRenderer>
          {body}
        </MDXRenderer>
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      body
      fields {
        permalink
        slug
      }
      frontmatter {
        description
        title
      }
    }
  }
`
