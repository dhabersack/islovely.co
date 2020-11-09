import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={mergeClassnames(`
      border-0
      border-gray-600
      border-l-3
      border-solid
      col-10/12
      italic
      mx-auto
      my-24
      pl-10
      relative
      m:col-8/10
      l:col-6/8
      l:my-48
    `, className)}
    {...props}
  >
    {children}
  </blockquote>
)
