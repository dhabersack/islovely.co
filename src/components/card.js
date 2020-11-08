import React from 'react'

export default ({
  children,
}) => (
  <div
    className={`
      background-color-white
      border-radius-xs
      box-shadow-s
      overflow-hidden
    `}
  >
    {children}
  </div>
)
