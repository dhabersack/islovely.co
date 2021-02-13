import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Breakout from '../components/breakout'
import CoinsIcon from '../icons/coins'
import Figure from '../components/figure'
import Layout from '../components/layout'
import LinkIcon from '../icons/link'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Stack from '../components/stack'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'

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
    figures,
    heroAlt,
    heroCaption,
    revenue,
    stack,
    title,
    url,
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

      <aside className="bg-gray-100 flex flex-wrap justify-between mb-6 px-4 py-3 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
        <div className="flex items-center space-x-1">
          <div className="h-6 w-6 dark:text-gray-400">
            <CoinsIcon />
          </div>

          <span>
            Revenue: <strong>${revenue}</strong>/month
          </span>
        </div>

        <a
          className="flex items-center"
          href={url}
        >
          <div className="h-6 w-6">
            <LinkIcon />
          </div>

          <span>
            Website
          </span>
        </a>
      </aside>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          fluid={hero.childImageSharp.fluid}
        />
      </Breakout>

      <MDXRenderer figures={mapFiguresToNamedObject(figures)}>
        {body}
      </MDXRenderer>

      <div className="mt-8">
        <Stack stack={stack} />
      </div>
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
        figures {
          name
          childImageSharp {
            fluid(maxWidth: 1008) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        heroAlt
        heroCaption
        revenue
        stack
        title
        url
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
