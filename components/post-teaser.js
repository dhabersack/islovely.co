import React from 'react'
import Image from 'next/image'

import Card from './card'
import PostMeta from './post-meta'
import Tag from './tag'
import slugify from '../lib/slugify'

export default function PostTeaser({
  post,
}) {
  const {
    author,
    categories,
    date,
    excerpt,
    hero,
    heroAlt,
    permalink,
    title,
  } = post

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Image
            alt={heroAlt}
            height="360"
            src={hero}
            width="640"
          />
        </a>

        <div className="flex flex-col h-full px-4 py-3">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="flex-grow mb-6 text-sm">
            {excerpt}
          </p>

          <div className="flex flex-wrap mb-1.5">
            {categories.map(category => (
              <React.Fragment key={category}>
                <div className="mb-1 mr-1.5">
                  <Tag href={`/categories/${slugify(category)}`}>
                    {category}
                  </Tag>
                </div>
              </React.Fragment>
            ))}
          </div>

          <PostMeta
            author={author.name}
            avatar={author.avatar}
            date={date}
          />
        </div>
      </article>
    </Card>
  )
}