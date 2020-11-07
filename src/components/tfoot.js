import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <tfoot
    className={mergeClassnames(`
    `, className)}
    {...props}
  >
    {children}
  </tfoot>
)
