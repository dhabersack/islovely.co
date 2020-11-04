import React from 'react'

import typeToClassname from '../utils/type-to-classname'
import mergeClassnames from '../utils/merge-classnames'

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
