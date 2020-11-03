import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({
  data,
  location,
}) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const { permalink } = fields

  const {
    tags,
    excerpt,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
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
        <h1>
          {title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="flex flex-wrap margin-bottom-xl">
          {tags.map(tag => (
            <div
              className="margin-bottom-xxs margin-right-xxs"
              key={`tag-${tag}`}
            >
              <Tag href={`/firetips/tags/${slugify(tag)}`}>
                {tag}
              </Tag>
            </div>
          ))}
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
      frontmatter {
        excerpt
        tags
        title
      }
      html
    }
  }
`
