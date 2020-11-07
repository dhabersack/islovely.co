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
      margin-horizontal-m
      margin-vertical-m
    `}
    {...props}
  />
)
