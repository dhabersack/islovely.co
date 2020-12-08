import React from 'react'

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
    excerpt,
    issue,
    title,
  } = frontmatter

  return (
    <>
      <footer
        className={`
          text-gray-600
          text-sm
        `}
      >
        <strong
          className={`
            font-medium
            mr-1
          `}
        >
          #{issue}
        </strong>

        {formatDate(date)}
      </footer>

      <h2
        className={`
          m-0
          text-xl
        `}
      >
        <a
          href={permalink}
        >
          {title}
        </a>
      </h2>

      <p
        className="text-base"
      >
        {excerpt}
      </p>
    </>
  )
}
