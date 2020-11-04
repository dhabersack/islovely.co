import React from 'react'

import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  ...props
}) => (
  <figure
    className={typeToClassname('figure')}
    {...props}
  >
    {children}
  </figure>
)
