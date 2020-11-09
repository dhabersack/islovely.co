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
      m-0
      mb-12
      mt-24
      xs:font-size-30-medium
      l:font-size-36-medium
      l:mb-24
      l:mt-48
    `, className)}
    {...props}
  >
    {children}
  </h1>
)
