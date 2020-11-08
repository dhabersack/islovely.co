import React from 'react'

import Button from './button'
import CookieIcon from '../icons/cookie'

export default () => (
  <Button
    className="iubenda-cs-preferences-link"
  >
    <div
      className={`
        align-items-center
        flex
      `}
    >
      <div
        className={`
          h-24
          mr-5
          w-24
        `}
      >
        <CookieIcon />
      </div>

      Update cookie settings
    </div>
  </Button>
)
