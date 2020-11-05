import React from 'react'

import slugify from '../utils/slugify'
import Card from './card'
import PostMeta from './post-meta'
import Tag from './tag'
import { A, H2, P } from '../styled-tags'

export default ({
  post
}) => {
  const {
    fields,
    frontmatter
  } = post

  const {
    date,
    permalink,
    slug
  } = fields

  const {
    categories,
    excerpt,
    heroAlt,
    title
  } = frontmatter

  return (
    <Card>
      <article
        className={`
          flex
          flex-column
          height-full
        `}
      >
        <a
          href={permalink}
        >
          <img
            alt={heroAlt}
            className="width-full"
            src={`/assets/heroes/${slug}--teaser.jpg`}
          />
        </a>

        <div
          className={`
            flex
            flex-column
            height-full
            padding-horizontal-s
            padding-vertical-s
          `}
        >
          <H2
            className={`
              font-size-16-short
              font-weight-700
              margin-0
              margin-bottom-xs
            `}
          >
            <A
              href={permalink}
            >
              {title}
            </A>
          </H2>

          <P
            className={`
              color-gray-700
              flex-grow
              font-size-14-medium
              margin-bottom-m
              m:font-size-14-medium
            `}
          >
            {excerpt}
          </P>

          <div
            className={`
              flex
              flex-wrap
              margin-bottom-xs
            `}
          >
            {categories.map(category => (
              <div
                className={`
                  margin-bottom-xxs
                  margin-right-xxs
                `}
                key={category}
              >
                <Tag
                  href={`/categories/${slugify(category)}`}
                >
                  {category}
                </Tag>
              </div>
            ))}
          </div>

          <PostMeta
            date={date}
          />
        </div>
      </article>
    </Card>
  )
}
