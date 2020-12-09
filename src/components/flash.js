import React from 'react'

export default ({
  children,
  type,
}) => {
  const backgroundColor = ({
    'error': 'bg-red-50',
    'info': 'bg-blue-50',
    'success': 'bg-green-50'
  }[type] || 'bg-gray-50');

  const borderColor = ({
    'error': 'border-red-200',
    'info': 'border-blue-200',
    'success': 'border-green-200'
  }[type] || 'border-gray-300');

  return (
    <p
      className={`
        ${backgroundColor}
        ${borderColor}
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
