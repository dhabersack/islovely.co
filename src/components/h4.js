import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h4
    className={mergeClassnames(getClassnamesForType('h4'), className)}
    {...props}
  >
    {children}
  </h4>
)
