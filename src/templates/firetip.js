import React from 'react'
import { graphql } from 'gatsby'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({ data }) => {
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
          <Emoji name=":fire:" />
          {title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <div className="flex flex-wrap">
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
