import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <tr
    className={mergeClassnames(``, className)}
    {...props}
  >
    {children}
  </tr>
)
