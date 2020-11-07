import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h4
    className={mergeClassnames(`
      font-size-16-short
      font-weight-700 margin-0
    `, className)}
    {...props}
  >
    {children}
  </h4>
)
