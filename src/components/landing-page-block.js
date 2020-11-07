import React from 'react'

import H2 from './h2'
import Img from './img'

export default ({
  children,
  heading,
  imageUrl,
}) => (
  <div
    className={`
      align-items-center
      flex
      flex-column
      s:align-items-start
      s:flex-row
      s:justify-between
    `}
  >
    <div
      className={`
        columns-8
        margin-bottom-xs
        xs:columns-6
        s:columns-3
        l:columns-4
    `}>
      <Img
        alt=""
        src={imageUrl}
      />
    </div>

    <div
      className={`
        s:columns-9
        l:columns-8
      `}
    >
      <H2
        className={`
          font-size-24-medium
          margin-bottom-s
          margin-top-0
        `}
      >
        {heading}
      </H2>

      {children}
    </div>
  </div>
)
