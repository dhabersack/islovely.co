import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <pre
    className={mergeClassnames(`
      break-normal
      margin-0
    `, className)}
    {...props}
  >
    {children}
  </pre>
)
