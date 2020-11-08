import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h1
    className={mergeClassnames(`
      font-size-24-medium
      font-weight-700
      margin-0
      margin-bottom-s
      margin-top-m
      xs:font-size-30-medium
      l:font-size-36-medium
      l:margin-bottom-m
      l:margin-top-l
    `, className)}
    {...props}
  >
    {children}
  </h1>
)
