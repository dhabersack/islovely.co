import React from 'react'

import Card from '../components/card'
import Emoji from '../components/emoji'
import Tag from '../components/tag'
import slugify from '../utils/slugify'

export default ({ firetip }) => {
  const {
    fields,
    frontmatter,
    html,
  } = firetip

  const {
    tags,
    title,
  } = frontmatter

  const {
    slug
  } = fields

  return (
    <Card>
      <div className="padding-horizontal-s padding-vertical-s">
        <h2 className="font-size-16-short font-weight-600 margin-0 margin-bottom-s">
          <a
            className="color-gray-900 visited:color-gray-900"
            href={`/firetips/${slug}`}
          >
            <Emoji name=":fire:" />

            {title}
          </a>
        </h2>

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
      </div>

      <footer className="background-color-gray-100 padding-horizontal-s padding-vertical-s">
        <p className="color-gray-600 font-size-12-medium margin-0">
          <span className="margin-right-xxs">
            Permalink:
          </span>

          <a href={`/firetips/${slug}`}>
            islovely.co/firetips/{slug}
          </a>
        </p>
      </footer>
    </Card>
  )
}
