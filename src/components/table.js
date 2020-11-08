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
      margin-0
      margin-bottom-m
      width-full
    `, className)}
    {...props}
  >
    {children}
  </table>
)
