import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  className,
  ...props
}) => (
  <a
    className={mergeClassnames(typeToClassname('link'), className)}
    {...props}
  >
    {children}
  </a>
)
