import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  alt,
  className,
  ...props
}) => (
  <img
    alt={alt ?? ''}
    className={mergeClassnames(`
      max-width-full
      vertical-align-middle
    `, className)}
    {...props}
  />
)
