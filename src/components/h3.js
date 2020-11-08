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
      m-0
      mb-6
      mt-24
      xs:font-size-20-short
      l:font-size-24-short
      l:mb-12
    `, className)}
    {...props}
  >
    {children}
  </h3>
)
