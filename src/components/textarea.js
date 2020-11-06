import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  children,
  ...props
}) => (
  <textarea
    className={mergeClassnames(getClassnamesForType('textarea'), className)}
    {...props}
  >
    {children}
  </textarea>
)
