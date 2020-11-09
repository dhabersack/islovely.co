import React from 'react'

export default ({
  children,
}) => (
  <div
    className={`
      bg-white
      overflow-hidden
      rounded-6
      shadow-s
    `}
  >
    {children}
  </div>
)
