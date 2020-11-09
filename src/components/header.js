import React from 'react'

import A from './a'
import Img from './img'
import Navigation from './navigation'

export default () => (
  <header
    className={`
      align-items-center
      flex
      flex-wrap
      justify-between
      py-12
    `}
  >
    <A
      className={`
        flex-no-shrink
        mr-20
        py-6
      `}
      href="/"
    >
      <Img
        alt="islovely"
        src="/assets/logo.svg"
      />
    </A>

    <Navigation />
  </header>
)
