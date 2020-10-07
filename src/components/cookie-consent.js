import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { CookieConsentContext } from '../contexts/cookie-consent'

export const CookieConsent = () => {
  const { setIsCookieConsentGiven } = useContext(CookieConsentContext)

  const [isCookieSolutionConfigured, setIsCookieSolutionConfigured] = useState(false)

  useEffect(() => {
    window._iub = window._iub || []

    window._iub.csConfiguration = {
      consentOnContinuedBrowsing: false,
      lang: 'en',
      siteId: 2017725,
      floatingPreferencesButtonDisplay: false,
      cookiePolicyId: 31487586,
      banner: {
        slideDown: false,
        acceptButtonDisplay: true,
        customizeButtonDisplay: true,
        acceptButtonColor: '#398fdd',
        acceptButtonCaptionColor: '#fefefe',
        customizeButtonColor: '#c4cfdc',
        customizeButtonCaptionColor: '#414b5d',
        rejectButtonDisplay: true,
        rejectButtonColor: '#398fdd',
        rejectButtonCaptionColor: '#fefefe',
        position: 'bottom',
        backgroundOverlay: true,
        textColor: '#fefefe',
        backgroundColor: '#191d27'
      },
      callback: {
        onReady: consentGiven => {
          console.log('ready', { consentGiven })
          setIsCookieConsentGiven(Boolean(consentGiven))
        },
        onConsentGiven: () => {
          console.log('consent given')
          setIsCookieConsentGiven(true)
        },
        onConsentRejected: () => {
          console.log('consent rejected')
          setIsCookieConsentGiven(false)
        },
      },
    }

    setIsCookieSolutionConfigured(true)
  }, [setIsCookieConsentGiven])

  return isCookieSolutionConfigured ? (
    <Helmet>
      <script
        async
        charSet="UTF-8"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
      />
    </Helmet>
  ) : null
}
