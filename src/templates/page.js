import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'

export default function Page({
  data,
}) => {
  const {
    body,
    frontmatter,
    permalink,
  } = data.page

  const {
    description,
    figures,
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

      <h1>
        {title}
      </h1>

      <MDXRenderer figures={mapFiguresToNamedObject(figures)}>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    page(
      slug: {
        eq: $slug
      }
    ) {
      body
      frontmatter {
        description
        figures {
          name
          childImageSharp {
            fluid(maxWidth: 1008) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        title
      }
      permalink
      slug
    }
  }
`
