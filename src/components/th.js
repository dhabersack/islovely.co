import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <th
    className={mergeClassnames(`
      background-color-gray-300
      font-size-16-medium
      font-weight-700
      padding-horizontal-xs
      padding-vertical-xs
      text-align-left
    `, className)}
    {...props}
  >
    {children}
  </th>
)
