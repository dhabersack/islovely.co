import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <code
    className={mergeClassnames(`
      bg-gray-300
      rounded-3
      color-gray-800
      font-weight-300
      monospace
      padding-horizontal-xxs
      padding-vertical-xxs
    `, className)}
    {...props}
  >
    {children}
  </code>
)
