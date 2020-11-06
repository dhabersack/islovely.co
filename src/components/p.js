import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <p
    className={mergeClassnames(getClassnamesForType('paragraph'), className)}
    {...props}
  >
    {children}
  </p>
)
