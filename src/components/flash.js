import React from 'react'

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
    <p
      className={`
        bg-${backgroundColor}
        border-${borderColor}
        border-1
        border-solid
        mb-6
        px-2.5
        py-3
        rounded-lg
        text-sm
        md:text-base
      `}
    >
      {children}
    </p>
  )
}
