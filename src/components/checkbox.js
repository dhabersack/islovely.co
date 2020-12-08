import React from  'react'

export default ({
  ...props
}) => (
  <input
    className={`
      appearance-none
      bg-white
      border
      border-gray-300
      border-solid
      cursor-pointer
      block
      h-6
      m-0
      outline-none
      rounded-lg
      text-blue-500
      w-6
      checked:background-image-checkbox
      focus:outline
    `}
    type="checkbox"
    {...props}
  />
)
