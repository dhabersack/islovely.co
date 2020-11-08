import React, { useContext } from 'react'

import CookieConsentContext from '../contexts/cookie-consent'
import P from './p'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  children,
  target,
}) => {
  const { isCookieConsentGiven } = useContext(CookieConsentContext)

  return isCookieConsentGiven ? children : (
    <div
      className={mergeClassnames(`
        bg-gray-100
        border-gray-500
        rounded-6
        border-style-dashed
        border-width-m
      `, className)}
    >
      <div
        className={`
          align-items-center
          flex
          flex-column
          justify-center
          padding-s
          text-align-center
          text-gray-600
        `}
      >
        <P
          className={`
            font-size-14
            italic
            m-0
            mb-12
          `}
        >
          Cannot show {target ?? 'content'} because cookie consent was not given.
        </P>

        <UpdateCookieSettingsTrigger />
      </div>
    </div>
  )
}
