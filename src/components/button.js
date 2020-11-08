import React from 'react'
import PropTypes from 'prop-types'

import mergeClassnames from '../utils/merge-classnames'

const Button = ({
  category,
  children,
  className,
  ...props
}) => {
  const stylesForCategory = {
    primary: `
      bg-blue-500
      color-gray-100
      font-size-16-medium
      padding-horizontal-m
      padding-vertical-s

      hover:bg-blue-600
    `,
    regular: `
      bg-gray-300
      color-gray-700
      font-size-14-medium
      padding-xs

      hover:bg-gray-400
    `
  }[category]

  return (
    <button
      className={mergeClassnames(`
        border-width-0
        rounded-3
        cursor-pointer
        m-0
        outline-none

        focus:outline

        disabled:bg-gray-500
        disabled:color-gray-200
        disabled:cursor-not-allowed

        ${stylesForCategory}
      `, className)}
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
