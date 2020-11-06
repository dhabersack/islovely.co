import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'

export default ({
  children,
  ...props
}) => (
  <strong
    className={getClassnamesForType('strong')}
    {...props}
  >
    {children}
  </strong>
)
