import React from 'react'

import A from './a'
import Img from './img'
import P from './p'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'

export default () => (
  <footer
    className={`
      align-items-center
      flex
      flex-column
      padding-vertical-m
      text-gray-600
    `}
  >
    <div
      className={`
        font-size-16-short
        m-0
        mb-24
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
        m-0
        mb-6
        padding-0
      `}
    >
      <A
        className={`
          block
          mx-10
        `}
        href="/legal-notice"
      >
        Legal notice
      </A>

      <A
        className={`
          block
          iubenda-embed
          iubenda-nostyle
          mx-10
          no-brand
        `}
        href="https://www.iubenda.com/privacy-policy/31487586"
      >
        Privacy Policy
      </A>

      <A
        className={`
          block
          iubenda-embed
          iubenda-nostyle
          mx-10
          no-brand
        `}
        href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy"
      >
        Cookie Policy
      </A>
    </div>

    <div
      className="mb-24"
    >
      <UpdateCookieSettingsTrigger />
    </div>

    <div
      className={`
        flex
        flex-wrap
        justify-center
        list-style-none
        m-0
        mb-24
        padding-0
      `}
    >
      <A
        className={`
          flex
          font-size-16
          mx-10
          padding-vertical-xxs
        `}
        href="https://github.com/domhabersack"
      >
        <Img
          alt="domhabersack on GitHub"
          className="mr-5"
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
          mx-10
          padding-vertical-xxs
        `}
        href="https://twitter.com/domhabersack"
      >
        <Img
          alt="domhabersack on Twitter"
          className="mr-5"
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
          mx-10
          padding-vertical-xxs
        `}
        href="https://dribbble.com/domhabersack"
      >
        <Img
          alt="domhabersack on dribbble"
          className="mr-5"
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
          mx-10
          padding-vertical-xxs
        `}
        href="https://mastodon.social/@domhabersack"
      >
        <Img
          alt="@domhabersack on Mastodon"
          className="mr-5"
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
        m-0
      `}
    >
      Illustrations by <A href="https://icons8.com">Icons8</A>.
    </P>
  </footer>
)
