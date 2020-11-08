import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <a
    className={mergeClassnames(`
      color-blue-500
      no-decoration
      focus:outline
      hover:underline
      visited:color-blue-500
    `, className)}
    {...props}
  >
    {children}
  </a>
)
