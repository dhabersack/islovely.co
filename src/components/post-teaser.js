import React from 'react'
import Img from 'gatsby-image'

import Card from './card'
import PostMeta from './post-meta'
import Tag from './tag'
import slugify from '../utils/slugify'

export default ({
  post,
}) => {
  const {
    date,
    frontmatter,
    hero,
    permalink,
  } = post

  const {
    author,
    categories,
    excerpt,
    heroAlt,
    title,
  } = frontmatter

  const authorName = author.frontmatter.name
  const avatarFluid = author.avatar.childImageSharp.fluid

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Img
            alt={heroAlt}
            fluid={hero.childImageSharp.fluid}
          />
        </a>

        <div className="flex flex-col h-full p-4">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="flex-grow text-sm mb-6">
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
            author={authorName}
            avatarFluid={avatarFluid}
            date={date}
          />
        </div>
      </article>
    </Card>
  )
}
