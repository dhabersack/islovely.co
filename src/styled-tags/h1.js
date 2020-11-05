import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

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
