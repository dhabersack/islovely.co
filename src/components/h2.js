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
      m-0
      mb-12
      mt-24
      xs:font-size-24-short
      l:font-size-30-short
      l:mb-24
      l:mt-48
    `, className)}
    {...props}
  >
    {children}
  </h2>
)
