import React from 'react'
import Img from 'gatsby-image'

import formatDate from '../utils/format-date'

export default function NewsletterTeaser({
  newsletter,
}) {
  const {
    date,
    frontmatter,
    hero,
    permalink,
  } = newsletter

  const {
    excerpt,
    heroAlt,
    issue,
    title,
  } = frontmatter

  return (
    <div class="flex space-x-2.5">
      <div className="flex-shrink-0 w-32 mt-0.5">
        <a href={permalink}>
          <Img
            alt={heroAlt}
            fluid={hero.childImageSharp.fluid}
          />
        </a>
      </div>

      <div>
        <footer className="mb-0.5 text-gray-500 text-xs dark:text-gray-400">
          <strong className="font-medium mr-1">
            #{issue}
          </strong>

          {formatDate(date)}
        </footer>

        <h2 className="leading-snug m-0 mb-1 text-base">
          <a href={permalink}>
            {title}
          </a>
        </h2>

        <p className="m-0 text-sm">
          {excerpt}
        </p>
      </div>
    </div>
  )
}
