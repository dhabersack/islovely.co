import React from 'react'

import Card from '@/components/card'
import Tag from '@/components/tag'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Firetip({
  firetip,
}) {
  const {
    mdxSource,
    permalink,
    slug,
    tags,
    title
  } = firetip

  const body = hydrateMDXSource(mdxSource)

  return (
    <Card>
      <div className="px-4 py-3">
        <h2 className="leading-snug m-0 mb-1.5 text-base">
          <a href={permalink}>
            {title}
          </a>
        </h2>

        {body}

        <div className="flex flex-wrap">
          {tags.map(({
            permalink,
            title,
          }) => (
            <React.Fragment key={`tag-${title}`}>
              <div className="mb-1 mr-2.5">
                <Tag href={permalink}>
                  {title}
                </Tag>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  )
}
