import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import formatDate from '../utils/format-date'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'

export default ({
  data,
  location,
}) => {
  const {
    body,
    date,
    frontmatter,
    permalink,
    slug,
  } = data.newsletter

  const {
    excerpt,
    figures,
    title,
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
          url: '/newsletter/archive'
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
        imageSubpath={`newsletter/${slug}`}
        permalink={permalink}
        publishedAt={date}
        title={title}
        type="article"
      />

      <Taper>
        <h1>
          {title}
        </h1>

        <p
          className={`
            mb-3
            text-gray-500
            text-xs
            dark:text-gray-400
          `}
        >
          {formatDate(date)}
        </p>

        <div
          className="mb-16"
        >
          <MDXRenderer
            figures={mapFiguresToNamedObject(figures)}
          >
            {body}
          </MDXRenderer>
        </div>

        <MailingListSignup
          sourceUrl={location.href}
        />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    newsletter(
      slug: {
        eq: $slug
      }
    ) {
      body
      date
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
        title
      }
      permalink
      slug
    }
  }
`
