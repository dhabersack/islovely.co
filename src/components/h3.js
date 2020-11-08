import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h3
    className={mergeClassnames(`
      font-size-16-medium
      font-weight-700
      margin-0
      margin-bottom-xs
      margin-top-m
      xs:font-size-20-short
      l:font-size-24-short
      l:margin-bottom-s
    `, className)}
    {...props}
  >
    {children}
  </h3>
)
