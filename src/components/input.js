import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  ...props
}) => (
  <input
    className={mergeClassnames(`
      appearance-none
      bg-white
      border-color-gray-300
      border-radius-xs
      border-style-solid
      border-width-s
      color-gray-700
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      padding-horizontal-xs-minus-border
      padding-vertical-s-minus-border
      width-full
      focus:border-color-blue-400
    `, className)}
    {...props}
  />
)
