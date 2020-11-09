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
      px-10
      py-6
    `, className)}
    {...props}
  >
    {children}
  </td>
)
