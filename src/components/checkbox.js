import React from  'react'

export default ({
  ...props
}) => (
  <input
    className={`
      appearance-none
      background-color-white
      border-color-gray-300
      border-radius-xs
      border-style-solid
      border-width-s
      color-blue-500
      cursor-pointer
      block
      height-24
      margin-0
      outline-none
      width-24

      checked:background-image-checkbox

      focus:outline
    `}
    type="checkbox"
    {...props}
  />
)
