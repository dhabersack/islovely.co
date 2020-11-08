import React from 'react'

import A from './a'
import H2 from './h2'
import Strong from './strong'
import formatDate from '../utils/format-date'

export default ({
  newsletter,
}) => {
  const {
    fields,
    frontmatter,
  } = newsletter

  const {
    date,
    permalink,
  } = fields

  const {
    issue,
    title,
  } = frontmatter

  return (
    <>
      <footer
        className={`
          color-gray-600
          font-size-12-short
        `}
      >
        <Strong
          className={`
            font-weight-500
            mr-5
          `}
        >
          #{issue}
        </Strong>

        {formatDate(date)}
      </footer>

      <H2
        className={`
          font-size-20-medium
          m-0
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
