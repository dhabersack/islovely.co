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
      margin-0
      margin-bottom-s
      m:font-size-18-medium
      m:margin-bottom-m
    `, className)}
    {...props}
  >
    {children}
  </p>
)
