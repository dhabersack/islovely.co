import React from 'react'

export default ({
  ...props
}) => (
  <hr
    className={`
      background-color-gray-300
      border-width-0
      border-radius-round
      height-1
      mx-20
      my-24
    `}
    {...props}
  />
)
