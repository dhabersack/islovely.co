import React from 'react'

import formatDate from '../utils/format-date'

export default ({ newsletter }) => {
  const {
    fields,
    frontmatter
  } = newsletter

  const {
    date,
    permalink
  } = fields

  const {
    title
  } = frontmatter

  return (
    <>
      <span className="color-gray-600 font-size-12-short">
        {formatDate(date)}
      </span>

      <h2 className="font-size-20-medium margin-0">
        <a href={permalink}>
          {title}
        </a>
      </h2>
    </>
  )
}
