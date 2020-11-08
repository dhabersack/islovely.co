import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <td
    className={mergeClassnames(`
      font-size-16-medium
      padding-horizontal-xs
      padding-vertical-xs
    `, className)}
    {...props}
  >
    {children}
  </td>
)
