import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

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
