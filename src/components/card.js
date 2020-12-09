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
      dark:bg-gray-900
    `}
  >
    {children}
  </div>
)
