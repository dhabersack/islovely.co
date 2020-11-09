import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={mergeClassnames(`
      border-gray-600
      border-style-solid
      border-0
      border-l-3
      columns-10-of-12
      italic
      mx-auto
      my-24
      pl-10
      relative
      m:columns-8-of-10
      l:columns-6-of-8
      l:my-48
    `, className)}
    {...props}
  >
    {children}
  </blockquote>
)
