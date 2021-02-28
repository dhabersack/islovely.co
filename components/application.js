import React, { useState } from 'react'
import { FormspreeProvider } from '@formspree/react'

import CookieConsentContext from '../src/contexts/cookie-consent'
import CookieConsent from './cookie-consent'

export default function Application({
  children,
}) {
  // TODO reset default to `false`
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(true)

  return (
    <FormspreeProvider project="1574261538980626222">
      <CookieConsentContext.Provider
        value={{
          isCookieConsentGiven,
          setIsCookieConsentGiven
        }}
      >
        {children}

        <CookieConsent />
      </CookieConsentContext.Provider>
    </FormspreeProvider>
  )
}
