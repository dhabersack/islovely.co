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

      <div>
        <p className="font-bold mb-0.5 text-gray-600 text-xs dark:text-gray-300">
          {author}
        </p>

        <p className="m-0 text-gray-500 text-xs dark:text-gray-400">
          {formatDate(date)}
        </p>
      </div>
    </div>
  )
}
