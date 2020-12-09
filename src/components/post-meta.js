import React from 'react'

import formatDate from '../utils/format-date'

export default ({
  date,
}) => (
  <div
    className={`
      flex
      items-center
    `}
  >
    <img
      alt="Dom Habersack"
      className={`
        h-10
        mr-2.5
        rounded-full
        w-10
      `}
      height="40"
      src="/assets/dom.jpg"
      width="40"
    />

    <div>
      <p
        className={`
          font-bold
          mb-0.5
          text-gray-600
          text-xs
          dark:text-gray-300
        `}
      >
        Dom Habersack
      </p>

      <p
        className={`
          m-0
          text-gray-500
          text-xs
          dark:text-gray-400
        `}
      >
        {formatDate(date)}
      </p>
    </div>
  </div>
)
