import React from 'react'

import Navigation from './navigation'

export default () => (
  <header
    className={`
      align-items-center
      flex
      flex-wrap
      justify-between
      py-3
    `}
  >
    <a
      className={`
        flex-no-shrink
        mr-5
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
