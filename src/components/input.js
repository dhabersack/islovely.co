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
      border-gray-300
      rounded-6
      border-style-solid
      border-width-s
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      padding-horizontal-xs-minus-border
      padding-vertical-s-minus-border
      text-gray-700
      w-full
      focus:border-blue-400
    `, className)}
    {...props}
  />
)
