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
      font-size-16-medium
      px-20
      py-12
      text-gray-100
      hover:bg-blue-600
    `,
    regular: `
      bg-gray-300
      font-size-14-medium
      px-10
      py-6
      text-gray-700
      hover:bg-gray-400
    `
  }[category]

  return (
    <button
      className={mergeClassnames(`
        border-transparent
        border-1
        rounded-3
        cursor-pointer
        m-0
        outline-none
        focus:outline
        disabled:bg-gray-500
        disabled:cursor-not-allowed
        disabled:text-gray-200

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
