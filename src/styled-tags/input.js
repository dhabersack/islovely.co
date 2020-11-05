import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  className,
  ...props
}) => (
  <input
    className={mergeClassnames(typeToClassname('input'), className)}
    {...props}
  />
)
