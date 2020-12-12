import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Card from '../components/card'
import Tag from '../components/tag'
import slugify from '../utils/slugify'

export default ({
  firetip,
}) => {
  const {
    body,
    frontmatter,
    slug,
  } = firetip

  const {
    tags,
    title,
  } = frontmatter

  return (
    <Card>
      <div
        className={`
          px-4
          py-3
        `}
      >
        <h2
          className={`
            leading-snug
            m-0
            mb-1.5
            text-base
          `}
        >
          <a
            href={`/firetips/${slug}`}
          >
            {title}
          </a>
        </h2>

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
                mb-1
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
      </div>

      <footer
        className={`
          bg-gray-100
          px-4
          py-3
          dark:bg-black
        `}
      >
        <p
          className={`
            m-0
            text-gray-500
            text-xs
            dark:text-gray-300
          `}
        >
          <span
            className="mr-1"
          >
            Permalink:
          </span>

          <a
            href={`/firetips/${slug}`}
          >
            islovely.co/firetips/{slug}
          </a>
        </p>
      </footer>
    </Card>
  )
}
