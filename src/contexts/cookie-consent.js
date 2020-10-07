import React from 'react'

export const CookieConsentContext = React.createContext({
  isCookieConsentGiven: false,
  setIsCookieConsentGiven: () => {}
})
