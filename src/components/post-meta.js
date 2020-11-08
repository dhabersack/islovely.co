import React from 'react'

import Img from './img'
import formatDate from '../utils/format-date'

export default ({
  date,
}) => (
  <div
    className={`
      align-items-center
      flex
    `}
  >
    <Img
      alt="Dom Habersack"
      className={`
        rounded-round
        mr-10
        h-42
        w-42
      `}
      height="42"
      src="/assets/dom.jpg"
      width="42"
    />

    <div
      className={`
        flex
        flex-column
        font-size-12-short
      `}
    >
      <span
        className={`
          font-weight-700
          mb-3
          text-gray-700
        `}
      >
        Dom Habersack
      </span>

      <span
        className={`
          font-weight-400
          text-gray-500
        `}
      >
        {formatDate(date)}
      </span>
    </div>
  </div>
)
