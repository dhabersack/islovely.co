import React from 'react'

import A from './a'

export default ({
  children,
  href,
}) => {
  const HtmlTag = href != null ? A : 'span'

  return (
    <HtmlTag
      className={`
        bg-gray-200
        rounded-3
        font-size-12-medium
        inline-block
        nowrap
        padding-xs
        text-gray-700
        visited:text-gray-700
      `}
      href={href}
    >
      {children}
    </HtmlTag>
  )
}
