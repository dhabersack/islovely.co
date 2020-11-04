import React from 'react'

import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  ...props
}) => (
  <strong
    className={typeToClassname('strong')}
    {...props}
  >
    {children}
  </strong>
)
