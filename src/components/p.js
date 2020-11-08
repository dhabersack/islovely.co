import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <p
    className={mergeClassnames(`
      font-size-16-medium
      m-0
      mb-12
      m:font-size-18-medium
      m:mb-24
    `, className)}
    {...props}
  >
    {children}
  </p>
)
