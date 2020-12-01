import React from 'react'

export default ({
  children,
  ...props
}) => (
  <mark
    className={`
      bg-yellow-300
      px-5
      py-3
      text-gray-700
    `}
    {...props}
  >
    {children}
  </mark>
)
