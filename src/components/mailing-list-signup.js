import React from 'react'

import A from './a'
import ConvertkitForm from './convertkit-form'
import H1 from './h1'
import P from './p'

export default ({
  sourceUrl,
}) => (
  <div
    className={`
      bg-gray-200
      rounded-6
      px-15
      py-12
    `}
  >
    <H1
      className={`
        font-size-24-short
        m-0
        mb-6
        mt-0
      `}
    >
      There is more to learn
    </H1>

    <P
      className="font-size-16-medium"
    >
      Get free previews of my upcoming course materials and other bonus content to help you work smarter. I share tips straight to your inbox once a week. You can read previous mails in the <A href="/newsletter/archive">newsletter archive</A>.
    </P>

    <ConvertkitForm
      sourceUrl={sourceUrl}
      svForm="1018607"
      uid="f55882552b"
    />
  </div>
)
