import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <ol
    className={mergeClassnames(`
      columns-10-of-12
      list-style-decimal
      mb-12
      mx-auto
      mt-0
      padding-0
      m:columns-8-of-10
      m:mb-24
      l:columns-6-of-8
    `, className)}
    {...props}
  >
    {children}
  </ol>
)
