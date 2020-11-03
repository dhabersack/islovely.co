import React from 'react'

import typeToClassname from '../utils/type-to-classname'

export const ListItem = ({
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

export const P = ({
  children,
  ...props
}) => (
  <p
    className={typeToClassname('paragraph')}
    {...props}
  >
    {children}
  </p>
)

export const Strong = ({
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