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
        text-base
        text-gray-100
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
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
