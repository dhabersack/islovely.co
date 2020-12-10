import React from 'react'

import ConvertkitForm from './convertkit-form'

export default ({
  sourceUrl,
}) => (
  <div
    className={`
      bg-gray-100
      px-4
      py-3
      rounded-lg
      shadow
      dark:bg-gray-900
    `}
  >
    <h1
      className={`
        text-lg
        m-0
        mb-1.5
        lg:text-xl
      `}
    >
      There is more to learn
    </h1>

    <p
      className={`
        mb-3
        text-sm
      `}
    >
      Get free previews of my upcoming course materials and other bonus content to help you work smarter. I share tips straight to your inbox once a week. You can read previous mails in the <a href="/newsletter/archive/">newsletter archive</a>.
    </p>

    <ConvertkitForm
      sourceUrl={sourceUrl}
      svForm="1018607"
      uid="f55882552b"
    />
  </div>
)
