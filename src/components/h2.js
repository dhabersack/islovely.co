import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h2
    className={mergeClassnames(`
      font-size-20-short
      font-weight-700
      margin-0
      margin-bottom-s
      margin-top-m
      xs:font-size-24-short
      l:font-size-30-short
      l:margin-bottom-m
      l:margin-top-l
    `, className)}
    {...props}
  >
    {children}
  </h2>
)
