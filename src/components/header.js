import React from 'react'

import Navigation from './navigation'

export default () => (
  <header
    className={`
      flex
      flex-wrap
      items-center
      justify-between
      py-3
      relative
      z-10
    `}
  >
    <a
      className={`
        flex-no-shrink
        py-1.5
      `}
      href="/"
    >
      <img
        alt="islovely"
        src="/assets/logo.svg"
      />
    </a>

    <Navigation />
  </header>
)
