import React from 'react'

export default ({
  children,
  type,
}) => {
  const backgroundColor = ({
    'error': 'red-50',
    'info': 'blue-50',
    'success': 'green-50'
  }[type] || 'gray-50');

  const borderColor = ({
    'error': 'red-200',
    'info': 'blue-200',
    'success': 'green-200'
  }[type] || 'gray-300');

  return (
    <p
      className={`
        bg-${backgroundColor}
        border-${borderColor}
        border
        mb-6
        px-4
        py-3
        rounded-lg
        text-sm
      `}
    >
      {children}
    </p>
  )
}
