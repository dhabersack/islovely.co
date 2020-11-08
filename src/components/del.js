import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <del
    className={mergeClassnames(``, className)}
    {...props}
  >
    {children}
  </del>
)
