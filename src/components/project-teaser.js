import React from 'react'

import Card from './card'

export default function ProjectTeaser({
  project,
}) {
  const {
    frontmatter,
    permalink,
  } = project

  const {
    excerpt,
    revenue,
    title,
    url,
  } = frontmatter

  return (
    <Card>
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

      <footer className="bg-gray-100 px-4 py-3">
        <div>
          Revenue: {revenue}
        </div>

        <div>
          URL: {url}
        </div>
      </footer>
    </Card>
  )
}
