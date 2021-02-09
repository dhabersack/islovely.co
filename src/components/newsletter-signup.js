import React from 'react'

import ConvertkitForm from './convertkit-form'
import UppercaseHeading from './uppercase-heading'

export default () => (
  <div>
    <UppercaseHeading>
      Subscribe to my newsletter
    </UppercaseHeading>

    <div className="space-y-2.5">
      <p className="mb-0 text-gray-600 text-sm">
        Get weekly tips, course and product previews, and more straight to your inbox. Read previous issues in the <a href="/newsletter/archive">archive</a>.
      </p>

      <ConvertkitForm
        cta="Subscribe"
        svForm="1018607"
        uid="f55882552b"
      />
    </div>
  </div>
)
