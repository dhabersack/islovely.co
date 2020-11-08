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
        background-color-gray-100
        border-color-gray-500
        border-radius-xs
        border-style-dashed
        border-width-m
      `, className)}
    >
      <div
        className={`
          align-items-center
          color-gray-600
          flex
          flex-column
          justify-center
          padding-s
          text-align-center
        `}
      >
        <P
          className={`
            font-size-14
            italic
            margin-0
            margin-bottom-s
          `}
        >
          Cannot show {target ?? 'content'} because cookie consent was not given.
        </P>

        <UpdateCookieSettingsTrigger />
      </div>
    </div>
  )
}
