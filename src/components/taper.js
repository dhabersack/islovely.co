import React from 'react'

export default ({
  children,
}) => (
  <div
    className={`
      mx-auto
      m:col-10/12
      l:col-8/12
    `}
  >
    {children}
  </div>
)
