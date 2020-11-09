import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <tbody
    className={mergeClassnames(`
      bg-gray-200
    `, className)}
    {...props}
  >
    {children}
  </tbody>
)
