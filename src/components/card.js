import React from 'react'

export default ({
  children,
}) => (
  <div
    className={`
      bg-white
      overflow-hidden
      rounded-md
      shadow-md
    `}
  >
    {children}
  </div>
)
