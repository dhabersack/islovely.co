import React from  'react'

export default ({
  ...props
}) => (
  <input
    className={`
      appearance-none
      bg-white
      border-gray-300
      rounded-6
      border-style-solid
      border-1
      cursor-pointer
      block
      h-24
      m-0
      outline-none
      text-blue-500
      w-24

      checked:background-image-checkbox

      focus:outline
    `}
    type="checkbox"
    {...props}
  />
)
