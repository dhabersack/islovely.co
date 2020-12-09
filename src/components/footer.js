import React from 'react'

import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'

export default () => (
  <footer
    className={`
      flex
      flex-col
      items-center
      py-6
      text-gray-500
      dark:text-gray-400
    `}
  >
    <div
      className={`
        m-0
        mb-6
        py-1
        text-base
      `}
    >
      &copy; Dom Habersack, 2020
    </div>

    <div
      className={`
        flex
        flex-wrap
        justify-center
        mb-1.5
        text-base
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
        mb-6
        space-x-2.5
      `}
    >
      <a
        href="https://twitter.com/domhabersack"
      >
        <img
          alt="Dom Habersack on Twitter"
          src="/icons/twitter.svg"
        />
      </a>

      <a
        href="https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw"
      >
        <img
          alt="Dom Habersack on YouTube"
          src="/icons/youtube.svg"
        />
      </a>

      <a
        href="https://twitch.tv/domhabersack"
      >
        <img
          alt="Dom Habersack on Twitch"
          src="/icons/twitch.svg"
        />
      </a>

      <a
        href="https://github.com/domhabersack"
      >
        <img
          alt="Dom Habersack on GitHub"
          src="/icons/github.svg"
        />
      </a>

      <a
        href="https://codepen.io/domhabersack"
      >
        <img
          alt="Dom Habersack on CodePen"
          src="/icons/codepen.svg"
        />
      </a>

      <a
        href="https://linkedin.com/in/domhabersack"
      >
        <img
          alt="Dom Habersack on LinkedIn"
          src="/icons/linkedin.svg"
        />
      </a>

      <a
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
