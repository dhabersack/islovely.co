import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Breakout from '../components/breakout'
import Figure from '../components/figure'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'

export default function Project({
  data,
}) {
  const {
    body,
    frontmatter,
    hero,
    permalink,
  } = data.project

  const {
    excerpt,
    heroAlt,
    heroCaption,
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

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          fluid={hero.childImageSharp.fluid}
        />
      </Breakout>

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
        heroAlt
        heroCaption
        title
      }
      hero {
        childImageSharp {
          fluid(maxWidth: 1504) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      permalink
    }
  }
`
