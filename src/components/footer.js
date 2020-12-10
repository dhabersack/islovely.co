import React from 'react'

import CodePen from '../icons/codepen-logo'
import Dribbble from '../icons/dribbble-logo'
import GitHub from '../icons/github-logo'
import LinkedIn from '../icons/linkedin-logo'
import Mastodon from '../icons/mastodon-logo'
import Twitch from '../icons/twitch-logo'
import Twitter from '../icons/twitter-logo'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'
import YouTube from '../icons/youtube-logo'

const SOCIAL_PROFILES = {
  'Twitter': {
    href: 'https://twitter.com/domhabersack',
    Logo: Twitter,
  },
  'YouTube': {
    href: 'https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw',
    Logo: YouTube,
  },
  'Twitch': {
    href: 'https://twitch.tv/domhabersack',
    Logo: Twitch,
  },
  'GitHub': {
    href: 'https://github.com/domhabersack',
    Logo: GitHub,
  },
  'CodePen': {
    href: 'https://codepen.io/domhabersack',
    Logo: CodePen,
  },
  'LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    Logo: LinkedIn,
  },
  'dribbble': {
    href: 'https://dribbble.com/domhabersack',
    Logo: Dribbble,
  },
  'Mastodon': {
    href: 'https://mastodon.social/@domhabersack',
    Logo: Mastodon,
  },
}

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
      {Object.entries(SOCIAL_PROFILES).map(([name, { href, Logo }]) => (
        <a
          className={`
            h-6
            w-6
            text-gray-600
            dark:text-gray-300
          `}
          href={href}
          title={`Dom Habersack on ${name}`}
        >
          <Logo />
        </a>
      ))}
    </div>
  </footer>
)
