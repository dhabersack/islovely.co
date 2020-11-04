import React from 'react'

import typeToClassname from '../utils/type-to-classname'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <p
    className={mergeClassnames(typeToClassname('paragraph'), className)}
    {...props}
  >
    {children}
  </p>
)
