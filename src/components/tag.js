import React from 'react'

export default ({
  children,
  href,
}) => {
  const HtmlTag = href != null ? 'a' : 'span'

  return (
    <HtmlTag
      className={`
        bg-gray-200
        inline-block
        px-2
        py-1.5
        rounded
        text-gray-600
        text-xs
        whitespace-nowrap
        visited:text-gray-600
      `}
      href={href}
    >
      {children}
    </HtmlTag>
  )
}
