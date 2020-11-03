import React from 'react'

import ConvertkitForm from './convertkit-form'

export default ({
  sourceUrl
}) => (
  <div
    className={`
      background-color-gray-200
      border-radius-xs
      padding-horizontal-s
      padding-vertical-s
    `}
  >
    <h1
      className={`
        font-size-24-short
        margin-0
        margin-bottom-xs
      `}
    >
      There is more to learn
    </h1>

    <p
      className={`
        font-size-16-medium
        m:font-size-18-medium
      `}
    >
      Get free previews of my upcoming course materials and other bonus content to help you work smarter. I share tips straight to your inbox once a week. You can read previous mails in the <a href="/newsletter/archive">newsletter archive</a>.
    </p>

    <ConvertkitForm
      sourceUrl={sourceUrl}
      svForm="1018607"
      uid="f55882552b"
    />
  </div>
)
