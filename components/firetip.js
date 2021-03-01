import React from 'react'

import Card from '../components/card'
import Tag from '../components/tag'
import slugify from '../lib/slugify'

export default function Firetip({
  firetip,
}) {
  const {
    content,
    slug,
    tags,
    title
  } = firetip

  const body = content

  return (
    <Card>
      <div className="px-4 py-3">
        <h2 className="leading-snug m-0 mb-1.5 text-base">
          <a href={`/firetips/${slug}`}>
            {title}
          </a>
        </h2>

        {body}

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
