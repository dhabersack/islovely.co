import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <strong
    className={mergeClassnames(`
      font-weight-600
    `, className)}
    {...props}
  >
    {children}
  </strong>
)
