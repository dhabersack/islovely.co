import React from 'react'

export default ({
  children,
  className,
  ...props
}) => (
  <label
    className={`
      block
      font-size-16-medium
      font-weight-500
      margin-bottom-xxs

      ${className ?? ''}
    `}
    {...props}
  >
    {children}
  </label>
)
