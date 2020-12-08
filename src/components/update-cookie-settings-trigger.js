import React from 'react'

import CookieIcon from '../icons/cookie'

export default () => (
  <button
    className="iubenda-cs-preferences-link"
  >
    <div
      className={`
        items-center
        flex
      `}
    >
      <div
        className={`
          h-6
          mr-1
          w-6
        `}
      >
        <CookieIcon />
      </div>

      Update cookie settings
    </div>
  </button>
)
