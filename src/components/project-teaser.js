import React from 'react'
import Img from 'gatsby-image'

import Card from './card'

export default function ProjectTeaser({
  project,
}) {
  const {
    frontmatter,
    hero,
    permalink,
  } = project

  const {
    excerpt,
    heroAlt,
    revenue,
    title,
    url,
  } = frontmatter

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Img
            alt={heroAlt}
            fluid={hero.childImageSharp.fluid}
          />
        </a>

        <div className="flex flex-col h-full px-4 py-3">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="flex-grow mb-0 text-sm">
            {excerpt}
          </p>
        </div>

        <footer className="bg-gray-100 flex flex-wrap px-4 py-3 space-x-2.5 text-gray-500 text-xs dark:bg-black dark:text-gray-300">
          <div>
            Revenue: <strong>${revenue}</strong>/month
          </div>

          <div>
            <a href={url}>
              Website
            </a>
          </div>
        </footer>
      </article>
    </Card>
  )
}
