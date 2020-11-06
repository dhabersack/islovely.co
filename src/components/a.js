import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <a
    className={mergeClassnames(getClassnamesForType('link'), className)}
    {...props}
  >
    {children}
  </a>
)
