import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import { H1 } from '../styled-tags'

export default ({
  data,
}) => {
  const {
    fields,
    frontmatter,
    html,
  } = data.markdownRemark

  const { permalink } = fields

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
      }
      html
      frontmatter {
        excerpt
        title
      }
    }
  }
`
