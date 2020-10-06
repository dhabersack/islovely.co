import React from 'react'

import { UpdateCookieSettingsTrigger } from './update-cookie-settings-trigger'

export default () => (
  <footer className="align-items-center color-gray-600 flex flex-column padding-vertical-m">
    <p className="font-size-16-short margin-0 margin-bottom-m padding-vertical-xxs">
      &copy; Dom Habersack, 2020
    </p>

    <p className="flex flex-wrap font-size-16-medium justify-center list-style-none margin-0 margin-bottom-xs padding-0">
      <a className="block margin-horizontal-xs" href="/legal-notice">
        Legal notice
      </a>

      <a href="https://www.iubenda.com/privacy-policy/31487586" className="iubenda-nostyle no-brand iubenda-embed block margin-horizontal-xs">
        Privacy Policy
      </a>


      <a href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy" className="iubenda-nostyle no-brand iubenda-embed block margin-horizontal-xs">
        Cookie Policy
      </a>
    </p>

    <p className="margin-bottom-m">
      <UpdateCookieSettingsTrigger />
    </p>

    <div className="flex flex-wrap justify-center list-style-none margin-0 margin-bottom-m padding-0">
      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xxs" href="https://github.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/github.svg" alt="domhabersack on GitHub" />

        <span>
          GitHub
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xxs" href="https://twitter.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/twitter.svg" alt="domhabersack on Twitter" />

        <span>
          Twitter
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xxs" href="https://dribbble.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/dribbble.svg" alt="domhabersack on dribbble" />

        <span>
          Dribbble
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xxs" href="https://mastodon.social/@domhabersack">
        <img className="margin-right-xxs" src="/icons/mastodon.svg" alt="@domhabersack on Mastodon" />

        <span>
          Mastodon
        </span>
      </a>
    </div>

    <p className="font-size-14 gray-600">
      Illustrations by <a href="https://icons8.com">Icons8</a>.
    </p>
  </footer>
)
