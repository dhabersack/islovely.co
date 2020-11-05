import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import { H1 } from '../styled-tags'

export default ({ data }) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const { permalink } = fields

  const {
    description,
    title
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

        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        permalink
        slug
      }
      html
      frontmatter {
        description
        title
      }
    }
  }
`
