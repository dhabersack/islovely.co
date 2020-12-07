import React from 'react'

import A from './a'
import Img from './img'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'

export default () => (
  <footer
    className={`
      align-items-center
      flex
      flex-column
      py-24
      text-gray-600
    `}
  >
    <div
      className={`
        font-size-16-short
        m-0
        mb-24
        py-3
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
        list-none
        m-0
        mb-6
        p-0
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
        list-none
        m-0
        mb-24
        p-0
      `}
    >
      <A
        className={`
          flex
          font-size-16
          mx-10
          py-3
        `}
        href="https://twitter.com/domhabersack"
      >
        <Img
          alt="Dom Habersack on Twitter"
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
          py-3
        `}
        href="https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw"
      >
        <Img
          alt="Dom Habersack on YouTube"
          className="mr-5"
          src="/icons/youtube.svg"
        />

        <span>
          YouTube
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          mx-10
          py-3
        `}
        href="https://twitch.tv/domhabersack"
      >
        <Img
          alt="Dom Habersack on Twitch"
          className="mr-5"
          src="/icons/twitch.svg"
        />

        <span>
          Twitch
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          mx-10
          py-3
        `}
        href="https://github.com/domhabersack"
      >
        <Img
          alt="Dom Habersack on GitHub"
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
          py-3
        `}
        href="https://codepen.io/domhabersack"
      >
        <Img
          alt="Dom Habersack on CodePen"
          className="mr-5"
          src="/icons/codepen.svg"
        />

        <span>
          CodePen
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          mx-10
          py-3
        `}
        href="https://linkedin.com/in/domhabersack"
      >
        <Img
          alt="Dom Habersack on LinkedIn"
          className="mr-5"
          src="/icons/linkedin.svg"
        />

        <span>
          LinkedIn
        </span>
      </A>

      <A
        className={`
          flex
          font-size-16
          mx-10
          py-3
        `}
        href="https://dribbble.com/domhabersack"
      >
        <Img
          alt="Dom Habersack on dribbble"
          className="mr-5"
          src="/icons/dribbble.svg"
        />

        <span>
          Dribbble
        </span>
      </A>
    </div>
  </footer>
)
