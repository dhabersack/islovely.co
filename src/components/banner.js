import React from 'react'

import CrossIcon from '../icons/cross'
import YouTube from '../icons/youtube-logo'

export default () => {
  return (
    <div
      className={`
        bg-red-500
        flex
        flex-wrap
        font-medium
        items-center
        justify-between
        mt-3
        px-4
        py-3
        rounded-lg
        shadow-md
        text-gray-100
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
          flex-grow
          m-0
          text-sm
        `}
      >
        I am now “as seen on YouTube”!
      </p>

      <a
        className={`
          bg-white
          font-medium
          p-2
          rounded-md
          text-red-600
          text-sm
          visited:text-red-600
        `}
        href="https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw"
      >
        Go to my channel
      </a>

      <a
        className={`
          h-6
          ml-2.5
          text-white
          w-6
        `}
        href="#"
      >
        <CrossIcon />
      </a>
    </div>
  )
}
