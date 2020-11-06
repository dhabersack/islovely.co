import React from 'react'

import A from './a'
import H2 from './h2'
import formatDate from '../utils/format-date'

export default ({
  newsletter,
}) => {
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
      <span
        className={`
          color-gray-600
          font-size-12-short
        `}
      >
        {formatDate(date)}
      </span>

      <H2
        className={`
          font-size-20-medium
          margin-0
        `}
      >
        <A
          href={permalink}
        >
          {title}
        </A>
      </H2>
    </>
  )
}
