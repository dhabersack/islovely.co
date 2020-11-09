import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <th
    className={mergeClassnames(`
      ${children != null ? 'bg-gray-300' : ''}
      font-size-16-medium
      font-weight-700
      px-10
      py-6
      text-align-left
    `, className)}
    {...props}
  >
    {children}
  </th>
)
