import React from 'react'

export default ({
  children
}) => (
  <div
    className={`
      margin-horizontal-auto
      m:columns-10-of-12
      l:columns-8-of-12
    `}
  >
    {children}
  </div>
)
