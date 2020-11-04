import React from 'react'

import ConvertkitForm from './convertkit-form'
import { A, H1, P } from '../styled-tags'

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
    <H1
      className={`
        font-size-24-short
        margin-0
        margin-bottom-xs
        margin-top-0
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
