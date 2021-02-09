import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({
  data,
}) => {
  const {
    body,
    frontmatter,
    permalink,
  } = data.firetip

  const {
    tags,
    title,
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
        title={title}
      />

      <RichPreview
        imageSubpath="firetips"
        permalink={permalink}
        title={title}
      />

      <Taper>
        <h1>
          {title}
        </h1>

        <MDXRenderer>
          {body}
        </MDXRenderer>

        <div
          className={`
            flex
            flex-wrap
          `}
        >
          {tags.map(tag => (
            <div
              className={`
                mb-3
                mr-2.5
              `}
              key={`tag-${tag}`}
            >
              <Tag
                href={`/firetips/tags/${slugify(tag)}`}
              >
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
    firetip(
      slug: {
        eq: $slug
      }
    ) {
      body
      frontmatter {
        tags
        title
      }
      permalink
    }
  }
`
