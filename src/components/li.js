import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'

export default ({
  children,
  ...props
}) => (
  <li
    className={getClassnamesForType('listItem')}
    {...props}
  >
    {children}
  </li>
)
