import React from 'react'

import Sparkles from '../icons/sparkles'

export default () => {
  return (
    <div
      className={`
        bg-yellow-300
      `}
    >
      <div
        className={`
          container
          flex
          flex-wrap
          font-medium
          items-center
          justify-center
          mx-auto
          px-4
          py-3
          space-x-2.5
          text-gray-900
        `}
      >
        <div
          className={`
            flex
            items-center
          `}
        >
          <div
            className={`
              flex-shrink-0
              h-6
              mr-1
              text-gray-800
              w-6
            `}
          >
            <Sparkles />
          </div>

          <p
            className={`
              m-0
              text-sm
            `}
          >
            Get 200+ icons, free for personal use: <a href="https://lovelicons.com">lovelicons.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
