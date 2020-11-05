import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  className,
  children,
  ...props
}) => (
  <textarea
    className={mergeClassnames(typeToClassname('textarea'), className)}
    {...props}
  >
    {children}
  </textarea>
)
