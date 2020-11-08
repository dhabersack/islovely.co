import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  children,
  ...props
}) => (
  <textarea
    className={mergeClassnames(`
      appearance-none
      bg-white
      block
      border-gray-300
      rounded-3
      border-style-solid
      border-width-s
      color-gray-700
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      padding-horizontal-xs-minus-border
      padding-vertical-s-minus-border
      w-full
      focus:border-blue-400
    `, className)}
    {...props}
  >
    {children}
  </textarea>
)
