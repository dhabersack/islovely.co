import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <table
    className={mergeClassnames(`
      border-collapse
      font-weight-400
      m-0
      mb-24
      width-full
    `, className)}
    {...props}
  >
    {children}
  </table>
)
