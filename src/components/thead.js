import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <thead
    className={mergeClassnames(`
    `, className)}
    {...props}
  >
    {children}
  </thead>
)
