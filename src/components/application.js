import React, { useState } from 'react'
import { StaticKitProvider } from '@statickit/react'

import CookieConsentContext from '../contexts/cookie-consent'
import CookieConsent from './cookie-consent'

export default ({ children }) => {
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(false)

  return (
    <StaticKitProvider site="fa0afc13c26b">
      <CookieConsentContext.Provider value={{
        isCookieConsentGiven,
        setIsCookieConsentGiven
      }}>
        {children}

        <CookieConsent />
      </CookieConsentContext.Provider>
    </StaticKitProvider>
  )
}
