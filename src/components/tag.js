import React from 'react'

import { A } from '../styled-tags'

export default ({
  children,
  href,
}) => {
  const HtmlTag = href != null ? A : 'span'

  return (
    <HtmlTag
      className={`
        background-color-gray-200
        border-radius-xxs
        color-gray-700
        font-size-12-medium
        inline-block
        nowrap
        padding-xs
        visited:color-gray-700
      `}
      href={href}
    >
      {children}
    </HtmlTag>
  )
}
