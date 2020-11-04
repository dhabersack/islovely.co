import React from 'react'

import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'
import { A, P } from '../styled-tags'

export default () => (
  <footer
    className={`
      align-items-center
      color-gray-600
      flex
      flex-column
      padding-vertical-m
    `}
  >
    <div
      className={`
        font-size-16-short
        margin-0
        margin-bottom-m
        padding-vertical-xxs
      `}
    >
      &copy; Dom Habersack, 2020
    </div>

    <div
      className={`
        flex
        flex-wrap
        font-size-16-medium
        justify-center
        list-style-none
        margin-0
        margin-bottom-xs
        padding-0
      `}
    >
      <A
        className={`
          block
          margin-horizontal-xs
        `}
        href="/legal-notice"
      >
        Legal notice
      </A>

      <A
        className={`
          iubenda-nostyle
          no-brand
          iubenda-embed
          block
          margin-horizontal-xs
        `}
        href="https://www.iubenda.com/privacy-policy/31487586"
      >
        Privacy Policy
      </A>

      <A
        className={`
          iubenda-nostyle
          no-brand
          iubenda-embed
          block
          margin-horizontal-xs
        `}
        href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy"
      >
        Cookie Policy
      </A>
    </div>

    <div
      className="margin-bottom-m"
    >
      <UpdateCookieSettingsTrigger />
    </div>

    <div
      className={`
        flex
        flex-wrap
        justify-center
        list-style-none
        margin-0
        margin-bottom-m
        padding-0
      `}
    >
      <A
        className={`
          flex
          font-size-16
          margin-horizontal-xs
          padding-vertical-xxs
        `}
        href="https://github.com/domhabersack"
      >
        <img
          alt="domhabersack on GitHub"
          className="margin-right-xxs"
          src="/icons/github.svg"
        />

        <span>
          GitHub
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          margin-horizontal-xs
          padding-vertical-xxs
        `}
        href="https://twitter.com/domhabersack"
      >
        <img
          alt="domhabersack on Twitter"
          className="margin-right-xxs"
          src="/icons/twitter.svg"
        />

        <span>
          Twitter
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          margin-horizontal-xs
          padding-vertical-xxs
        `}
        href="https://dribbble.com/domhabersack"
      >
        <img
          alt="domhabersack on dribbble"
          className="margin-right-xxs"
          src="/icons/dribbble.svg"
        />

        <span>
          Dribbble
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          margin-horizontal-xs
          padding-vertical-xxs
        `}
        href="https://mastodon.social/@domhabersack"
      >
        <img
          alt="@domhabersack on Mastodon"
          className="margin-right-xxs"
          src="/icons/mastodon.svg"
        />

        <span>
          Mastodon
        </span>
      </A>
    </div>

    <P
      className={`
        font-size-14
        gray-600
        margin-0
      `}
    >
      Illustrations by <A href="https://icons8.com">Icons8</A>.
    </P>
  </footer>
)
