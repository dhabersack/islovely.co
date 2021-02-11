import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Card from '../components/card'
import Tag from '../components/tag'
import slugify from '../utils/slugify'

export default function FireTip({
  firetip,
}) {
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
      <div className="p-4">
        <h2 className="leading-snug m-0 mb-1.5 text-base">
          <a href={`/firetips/${slug}`}>
            {title}
          </a>
        </h2>

        <MDXRenderer>
          {body}
        </MDXRenderer>

        <div className="flex flex-wrap">
          {tags.map(tag => (
            <React.Fragment key={`tag-${tag}`}>
              <div className="mb-1 mr-2.5">
                <Tag href={`/firetips/tags/${slugify(tag)}`}>
                  {tag}
                </Tag>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  )
}
