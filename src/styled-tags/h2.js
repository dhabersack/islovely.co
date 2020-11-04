import React from 'react'

import typeToClassname from '../utils/type-to-classname'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h2
    className={mergeClassnames(typeToClassname('h2'), className)}
    {...props}
  >
    {children}
  </h2>
)
