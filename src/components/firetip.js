import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import A from '../components/a'
import Card from '../components/card'
import H2 from '../components/h2'
import P from '../components/p'
import Tag from '../components/tag'
import slugify from '../utils/slugify'

export default ({
  firetip,
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = firetip

  const {
    tags,
    title,
  } = frontmatter

  const {
    slug,
  } = fields

  return (
    <Card>
      <div
        className={`
          padding-horizontal-s
          padding-vertical-s
        `}
      >
        <H2
          className={`
            font-size-16-short
            font-weight-600
            m-0
            mb-12
          `}
        >
          <A
            className={`
              color-gray-900
              visited:color-gray-900
            `}
            href={`/firetips/${slug}`}
          >
            {title}
          </A>
        </H2>

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
                mr-5
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
      </div>

      <footer
        className={`
          bg-gray-100
          padding-horizontal-s
          padding-vertical-s
        `}
      >
        <P
          className={`
            color-gray-600
            font-size-12-medium
            m-0
          `}
        >
          <span
            className="mr-5"
          >
            Permalink:
          </span>

          <A
            href={`/firetips/${slug}`}
          >
            islovely.co/firetips/{slug}
          </A>
        </P>
      </footer>
    </Card>
  )
}
