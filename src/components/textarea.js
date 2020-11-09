import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  children,
  ...props
}) => (
  <textarea
    className={mergeClassnames(`
      appearance-none
      bg-white
      block
      border-gray-300
      rounded-3
      border-style-solid
      border-1
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      px-10
      py-12
      text-gray-700
      w-full
      focus:border-blue-400
    `, className)}
    {...props}
  >
    {children}
  </textarea>
)
