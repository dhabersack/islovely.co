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
        col-8/12
        mb-6
        xs:col-6/12
        s:col-3/12
        l:col-4/12
    `}>
      <Img
        alt=""
        src={imageUrl}
      />
    </div>

    <div
      className={`
        s:col-9/12
        l:col-8/12
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
