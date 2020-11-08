import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={mergeClassnames(`
      border-color-gray-600
      border-left-width-l
      border-style-solid
      border-width-0
      columns-10-of-12
      italic
      margin-horizontal-auto
      margin-vertical-m
      padding-left-xs
      relative
      m:columns-8-of-10
      l:columns-6-of-8
      l:margin-vertical-l
    `, className)}
    {...props}
  >
    {children}
  </blockquote>
)
