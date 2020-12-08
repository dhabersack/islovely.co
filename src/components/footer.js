import React from 'react'

import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'

export default () => (
  <footer
    className={`
      flex
      flex-col
      items-center
      py-6
      text-gray-600
    `}
  >
    <div
      className={`
        text-base
        m-0
        mb-6
        py-1
      `}
    >
      &copy; Dom Habersack, 2020
    </div>

    <div
      className={`
        flex
        flex-wrap
        text-base
        justify-center
        mb-1.5
      `}
    >
      <a
        className={`
          block
          mx-2.5
        `}
        href="/legal-notice"
      >
        Legal notice
      </a>

      <a
        className={`
          block
          iubenda-embed
          iubenda-nostyle
          mx-2.5
          no-brand
        `}
        href="https://www.iubenda.com/privacy-policy/31487586"
      >
        Privacy Policy
      </a>

      <a
        className={`
          block
          iubenda-embed
          iubenda-nostyle
          mx-2.5
          no-brand
        `}
        href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy"
      >
        Cookie Policy
      </a>
    </div>

    <div
      className="mb-6"
    >
      <UpdateCookieSettingsTrigger />
    </div>

    <div
      className={`
        flex
        flex-wrap
        justify-center
        list-none
        m-0
        mb-6
        p-0
      `}
    >
      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://twitter.com/domhabersack"
      >
        <img
          alt="Dom Habersack on Twitter"
          src="/icons/twitter.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw"
      >
        <img
          alt="Dom Habersack on YouTube"
          src="/icons/youtube.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://twitch.tv/domhabersack"
      >
        <img
          alt="Dom Habersack on Twitch"
          src="/icons/twitch.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://github.com/domhabersack"
      >
        <img
          alt="Dom Habersack on GitHub"
          src="/icons/github.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://codepen.io/domhabersack"
      >
        <img
          alt="Dom Habersack on CodePen"
          src="/icons/codepen.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://linkedin.com/in/domhabersack"
      >
        <img
          alt="Dom Habersack on LinkedIn"
          src="/icons/linkedin.svg"
        />
      </a>

      <a
        className={`
          mx-2.5
          py-1
        `}
        href="https://dribbble.com/domhabersack"
      >
        <img
          alt="Dom Habersack on dribbble"
          src="/icons/dribbble.svg"
        />
      </a>
    </div>
  </footer>
)
