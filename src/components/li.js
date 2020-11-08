import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <li
    className={mergeClassnames(`
      font-size-16-medium
      margin-bottom-xs
      padding-0
      m:font-size-18-medium
    `, className)}
    {...props}
  >
    {children}
  </li>
)
