import React from  'react'

export default ({
  ...props
}) => (
  <input
    className={`
      appearance-none
      bg-white
      border-gray-300
      border-radius-xs
      border-style-solid
      border-width-s
      color-blue-500
      cursor-pointer
      block
      h-24
      m-0
      outline-none
      w-24

      checked:background-image-checkbox

      focus:outline
    `}
    type="checkbox"
    {...props}
  />
)
