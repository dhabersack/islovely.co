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
          px-15
          py-12
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
              text-gray-900
              visited:text-gray-900
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
          px-15
          py-12
        `}
      >
        <P
          className={`
            font-size-12-medium
            m-0
            text-gray-600
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