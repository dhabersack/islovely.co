import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <ul
    className={mergeClassnames(`
      col-10/12
      list-disc
      mb-12
      mt-0
      mx-auto
      p-0
      m:col-8/10
      m:mb-24
      l:col-6/8
    `, className)}
    {...props}
  >
    {children}
  </ul>
)
