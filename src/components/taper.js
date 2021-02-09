import React from 'react'

export default ({
  children,
  className,
}) => (
  <div className={`mx-auto w-full md:w-10/12 lg:w-8/12 ${className ?? ''}`}>
    {children}
  </div>
)
