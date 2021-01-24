import React from 'react'

import YouTube from '../icons/youtube-logo'

export default () => {
  return (
    <div
      className={`
        bg-gray-900
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
          text-gray-100
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
              h-6
              mr-1
              w-6
            `}
          >
            <YouTube />
          </div>

          <p
            className={`
              m-0
              text-sm
            `}
          >
            <span
              className={`
                xs:hidden
              `}
            >
              Get my icon set on <a href="https://lovelicons.com">lovelicons.com</a>!
            </span>

            <span
              className={`
                hidden
                xs:block
              `}
            >
              Introducing Lovelicons: the loveliest icons for your next project.
            </span>

          </p>
        </div>
      </div>
    </div>
  )
}
