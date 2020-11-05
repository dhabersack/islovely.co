import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  className,
  ...props
}) => (
  <h4
    className={mergeClassnames(typeToClassname('h4'), className)}
    {...props}
  >
    {children}
  </h4>
)
