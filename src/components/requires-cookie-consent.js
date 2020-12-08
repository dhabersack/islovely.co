import React, { useContext } from 'react'

import CookieConsentContext from '../contexts/cookie-consent'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'

export default ({
  children,
  target,
}) => {
  const { isCookieConsentGiven } = useContext(CookieConsentContext)

  return isCookieConsentGiven ? children : (
    <div
      className={`
        bg-gray-100
        border-2
        border-dashed
        border-gray-500
        rounded-lg
      `}
    >
      <div
        className={`
          flex
          flex-col
          items-center
          justify-center
          px-2.5
          py-3
          text-center
          text-gray-600
        `}
      >
        <p
          className={`
            italic
            m-0
            mb-3
            text-sm
          `}
        >
          Cannot show {target ?? 'content'} because cookie consent was not given.
        </p>

        <UpdateCookieSettingsTrigger />
      </div>
    </div>
  )
}
