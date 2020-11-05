import React from 'react'

import Navigation from './navigation'
import { A } from '../styled-tags'

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
