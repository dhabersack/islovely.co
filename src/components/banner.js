import React from 'react'

import YouTube from '../icons/youtube-logo'

export default () => {
  return (
    <div
      className={`
        bg-red-500
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
              I am now on YouTube!
            </span>

            <span
              className={`
                hidden
                xs:block
              `}
            >
              I am now “as seen on YouTube”!
            </span>
          </p>
        </div>

        <a
          className={`
            bg-white
            font-medium
            px-2.5
            py-2
            rounded-md
            shadow-sm
            text-red-600
            text-xs
            visited:text-red-600
          `}
          href="https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw"
        >
          <span
            className={`
              xs:hidden
            `}
          >
            My channel
          </span>

          <span
            className={`
              hidden
              xs:block
            `}
          >
            Go to my channel
          </span>
        </a>
      </div>
    </div>
  )
}
