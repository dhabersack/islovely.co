import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import H1 from '../components/h1'
import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import P from '../components/p'
import Taper from '../components/taper'
import formatDate from '../utils/format-date'

export default ({
  data,
  location,
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = data.mdx

  const {
    date,
    permalink,
    slug,
  } = fields

  const {
    excerpt,
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
        <H1
          className="mb-3"
        >
          {title}
        </H1>

        <P
          className={`
            font-size-12-short
            mb-12
            text-gray-500
          `}
        >
          {formatDate(date)}
        </P>

        <div
          className="mb-60"
        >
          <MDXRenderer>
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
    mdx(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      body
      fields {
        date
        permalink
        slug
      }
      frontmatter {
        excerpt
        title
      }
    }
  }
`
