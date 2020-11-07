import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <ul
    className={mergeClassnames(`
      columns-10-of-12
      list-style-disc
      margin-bottom-s
      margin-horizontal-auto
      margin-top-0
      padding-0
      m:columns-8-of-10
      m:margin-bottom-m
      l:columns-6-of-8
    `, className)}
    {...props}
  >
    {children}
  </ul>
)
