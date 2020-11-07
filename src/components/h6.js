import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h6
    className={mergeClassnames(`
      font-weight-700
      margin-0
    `, className)}
    {...props}
  >
    {children}
  </h6>
)
