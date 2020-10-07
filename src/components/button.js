import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  category,
  children,
  className,
  ...props
}) => {
  const stylesForCategory = {
    primary: `
      background-color-blue-500
      color-gray-100
      font-size-16-medium
      padding-horizontal-m
      padding-vertical-s

      hover:background-color-blue-600
    `,
    regular: `
      background-color-gray-300
      color-gray-700
      font-size-14-medium
      padding-xs

      hover:background-color-gray-400
    `
  }[category]

  return (
    <button
      className={`
        border-width-0
        border-radius-xxs
        cursor-pointer
        margin-0
        outline-none

        focus:outline

        disabled:background-color-gray-500
        disabled:color-gray-200
        disabled:cursor-not-allowed

        ${stylesForCategory}
        ${className ?? ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  category: PropTypes.oneOf(['regular', 'primary']),
}

Button.defaultProps = {
  category: 'regular',
}

export default Button
