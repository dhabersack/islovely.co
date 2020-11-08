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
        border-radius-round
        mr-10
        height-42
        width-42
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
          color-gray-700
          font-weight-700
          mb-3
        `}
      >
        Dom Habersack
      </span>

      <span
        className={`
          color-gray-500
          font-weight-400
        `}
      >
        {formatDate(date)}
      </span>
    </div>
  </div>
)
