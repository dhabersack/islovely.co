import React from 'react'

import Card from './card'
import ConvertkitForm from './convertkit-form'

export default ({
  sourceUrl,
}) => (
  <Card>
    <div
      className={`
        bg-blue-100
        px-4
        py-3
        xs:px-5
        xs:py-4
        sm:px-8
        sm:py-6
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
          xs:mb-4
          sm:mb-6
        `}
      >
        Get free previews of my upcoming course materials and other bonus content to help you work smarter. I share tips straight to your inbox once a week. You can read previous mails in the <a href="/newsletter/archive">newsletter archive</a>.
      </p>

      <ConvertkitForm
        cta="Subscribe"
        sourceUrl={sourceUrl}
        svForm="1018607"
        uid="f55882552b"
      />
    </div>
  </Card>
)
