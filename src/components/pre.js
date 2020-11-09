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
      m-0
    `, className)}
    {...props}
  >
    {children}
  </pre>
)
