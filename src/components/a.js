import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <a
    className={mergeClassnames(`
      no-decoration
      text-blue-500
      focus:outline
      hover:underline
      visited:text-blue-500
    `, className)}
    {...props}
  >
    {children}
  </a>
)
