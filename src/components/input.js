import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  ...props
}) => (
  <input
    className={mergeClassnames(`
      appearance-none
      bg-white
      border-1
      border-gray-300
      border-solid
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      px-10
      py-12
      rounded-6
      text-gray-700
      w-full
      focus:border-blue-400
    `, className)}
    {...props}
  />
)
