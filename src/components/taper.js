import React from 'react'

export default ({
  className,
  children,
}) => (
  <div
    className={`
      mx-auto
      md:w-10/12
      lg:w-8/12
      ${className}
    `}
  >
    {children}
  </div>
)
