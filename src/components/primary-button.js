import React from 'react'

const PrimaryButton = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`
        bg-blue-500
        px-5
        py-3
        text-gray-100
        text-base
        hover:bg-blue-600
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
