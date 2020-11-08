import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <em
    className={mergeClassnames(``, className)}
    {...props}
  >
    {children}
  </em>
)
