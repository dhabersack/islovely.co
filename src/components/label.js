import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <label
    className={mergeClassnames(`
      block
      font-size-16-medium
      font-weight-500
      mb-3
    `, className)}
    {...props}
  >
    {children}
  </label>
)
