import React from  'react'

export default ({
  ...props
}) => (
  <input
    className={`
      appearance-none
      bg-white
      border-1
      border-gray-300
      border-solid
      cursor-pointer
      block
      h-24
      m-0
      outline-none
      rounded-6
      text-blue-500
      w-24

      checked:background-image-checkbox

      focus:outline
    `}
    type="checkbox"
    {...props}
  />
)
