import React from 'react'

import typeToClassname from '../utils/type-to-classname'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h1
    className={mergeClassnames(typeToClassname('h1'), className)}
    {...props}
  >
    {children}
  </h1>
)
