import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  className,
  ...props
}) => (
  <label
    className={mergeClassnames(typeToClassname('label'), className)}
    {...props}
  >
    {children}
  </label>
)
