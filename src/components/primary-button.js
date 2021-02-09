import React from 'react'

const PrimaryButton = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
