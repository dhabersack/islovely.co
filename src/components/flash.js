import React from 'react'

import P from './p'

export default ({
  children,
  type,
}) => {
  const backgroundColor = ({
    'error': 'red-100',
    'info': 'blue-100',
    'success': 'green-100'
  }[type] || 'gray-100');

  const borderColor = ({
    'error': 'red-300',
    'info': 'blue-300',
    'success': 'green-300'
  }[type] || 'gray-400');

  return (
    <P
      className={`
        bg-${backgroundColor}
        border-${borderColor}
        border-1
        border-solid
        font-size-14-medium
        mb-24
        px-15
        py-12
        rounded-6
        m:font-size-16-medium
      `}
    >
      {children}
    </P>
  )
}
