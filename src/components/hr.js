import React from 'react'

export default ({
  ...props
}) => (
  <hr
    className={`
      bg-gray-300
      border-0
      rounded-round
      h-1
      mx-20
      my-24
    `}
    {...props}
  />
)
