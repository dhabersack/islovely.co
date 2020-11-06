import React from 'react'

import A from './a'
import Navigation from './navigation'

export default () => (
  <header
    className={`
      align-items-center
      flex
      flex-wrap
      justify-between
      padding-vertical-s
    `}
  >
    <A
      className={`
        flex-no-shrink
        margin-right-m
        padding-vertical-xs
      `}
      href="/"
    >
      <img
        alt="islovely"
        src="/assets/logo.svg"
      />
    </A>

    <Navigation />
  </header>
)
