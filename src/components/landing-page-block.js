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
        columns-8-of-12
        mb-6
        xs:columns-6-of-12
        s:columns-3-of-12
        l:columns-4-of-12
    `}>
      <Img
        alt=""
        src={imageUrl}
      />
    </div>

    <div
      className={`
        s:columns-9-of-12
        l:columns-8-of-12
      `}
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        {heading}
      </H2>

      {children}
    </div>
  </div>
)
