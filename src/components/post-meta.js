import React from 'react'
import Img from 'gatsby-image'

import formatDate from '../utils/format-date'

export default function PostMeta({
  author,
  avatarFluid,
  date,
}) {
  return (
    <div className="flex items-center space-x-2.5">
      <Img
        alt={author}
        className="h-10 rounded-full w-10"
        fluid={avatarFluid}
        height="40"
        width="40"
      />

      <div className="flex flex-col space-y-0.5 text-xs">
        <span className="font-bold text-gray-600 dark:text-gray-300">
          {author}
        </span>

        <span className="text-gray-500 dark:text-gray-400">
          {formatDate(date)}
        </span>
      </div>
    </div>
  )
}
