import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  ...props
}) => (
  <input
    className={mergeClassnames(getClassnamesForType('input'), className)}
    {...props}
  />
)
