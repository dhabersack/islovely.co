import React from 'react'

import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  ...props
}) => (
  <figcaption
    className={typeToClassname('figcaption')}
    {...props}
  >
    {children}
  </figcaption>
)
