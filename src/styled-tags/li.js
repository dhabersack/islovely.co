import React from 'react'

import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  ...props
}) => (
  <li
    className={typeToClassname('listItem')}
    {...props}
  >
    {children}
  </li>
)
