import React from 'react'

import CodePen from '../icons/codepen-logo'
import Dribbble from '../icons/dribbble-logo'
import GitHub from '../icons/github-logo'
import LinkedIn from '../icons/linkedin-logo'
import Mastodon from '../icons/mastodon-logo'
import NewsletterSignup from './newsletter-signup'
import Twitch from '../icons/twitch-logo'
import Twitter from '../icons/twitter-logo'
import UpdateCookieSettingsTrigger from './update-cookie-settings-trigger'
import UppercaseHeading from './uppercase-heading'
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

export default ({
  location,
}) => (
  <footer className="divide-y text-gray-500 dark:text-gray-400">
    <div className="py-8 space-y-8 sm:flex sm:flex-row sm:justify-between sm:space-y-0">
      <div className="flex flex-grow">
        <div className="w-1/2 sm:w-24 md:w-36">
          <UppercaseHeading>
            Company
          </UppercaseHeading>

          <div className="flex flex-col items-start mb-2 space-y-1.5 text-sm">
            <a
              className="block"
              href="/about"
            >
              About
            </a>

            <a
              className="block"
              href="/courses"
            >
              Courses
            </a>

            <a
              className="block"
              href="/projects"
            >
              Projects
            </a>

            <a
              className="block"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <UppercaseHeading>
            Legal
          </UppercaseHeading>

          <div className="flex flex-col items-start mb-2 space-y-1.5 text-sm">
            <a
              className="block"
              href="/legal-notice"
            >
              Legal Notice
            </a>

            <a
              className="block iubenda-embed iubenda-nostyle no-brand"
              href="https://www.iubenda.com/privacy-policy/31487586"
            >
              Privacy Policy
            </a>

            <a
              className="block iubenda-embed iubenda-nostyle no-brand"
              href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy"
            >
              Cookie Policy
            </a>
          </div>

          <UpdateCookieSettingsTrigger />
        </div>
      </div>

      <div className="sm:w-80 md:w-auto md:max-w-xs lg:max-w-sm">
        <NewsletterSignup />
      </div>
    </div>

    <div className="py-8 sm:flex sm:items-center sm:justify-between">
      <p className="m-0 mb-3 text-xs sm:mb-0">
        &copy; 2021 Dominik Habersack. All rights reserved.
      </p>

      <div className="flex space-x-2.5">
        {Object.entries(SOCIAL_PROFILES).map(([name, { href, Logo }]) => (
          <a
            className="block h-6 w-6 text-gray-600 dark:text-gray-300"
            href={href}
            key={name}
            title={`Dom Habersack on ${name}`}
          >
            <Logo />
          </a>
        ))}
      </div>
    </div>
  </footer>
)
