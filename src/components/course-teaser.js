import React from 'react'

import Card from './card'
import CalendarIcon from '../icons/calendar'
import ClockIcon from '../icons/clock'
import EmailWithLetterIcon from '../icons/email-with-letter'
import VideoIcon from '../icons/video'

export default ({
  course,
}) => {
  const {
    fields,
    frontmatter,
  } = course

  const {
    permalink,
  } = fields

  const {
    emails,
    excerpt,
    highlightColor,
    hours,
    title,
    videos,
    weeks,
  } = frontmatter

  return (
    <Card>
      <article
        className={`
          ${highlightColor}
          border-0
          border-t-8
          flex
          flex-col
          h-full
        `}
      >
        <div
          className={`
            flex-grow
            pb-3
            pt-2
            px-4
          `}
        >
          <h2
            className={`
              leading-snug
              m-0
              mb-1.5
              text-base
            `}
          >
            <a
              href={permalink}
            >
              {title}
            </a>
          </h2>

          <p
            className={`
              m-0
              text-sm
            `}
          >
            {excerpt}
          </p>
        </div>

        <footer
          className={`
            bg-gray-100
            flex
            flex-wrap
            px-4
            py-3
            text-gray-500
            text-xs
            dark:bg-black
            dark:text-gray-300
          `}
        >
          {emails && (
            <div
              className={`
                inline-flex
                items-center
                mr-2.5
              `}
            >
              <div
                className={`
                  h-6
                  mr-1
                  w-6
                  dark:text-gray-400
                `}
              >
                <EmailWithLetterIcon />
              </div>

              <span>
                <strong>{emails}</strong> emails
              </span>
            </div>
          )}

          {videos && (
            <div
              className={`
                inline-flex
                items-center
                mr-2.5
              `}
            >
              <div
                className={`
                  h-6
                  mr-1
                  w-6
                  dark:text-gray-400
                `}
              >
                <VideoIcon />
              </div>

              <span>
                <strong>{videos}</strong> videos
              </span>
            </div>
          )}

          {hours && (
            <div
              className={`
                inline-flex
                items-center
                mr-2.5
              `}
            >
              <div
                className={`
                  h-6
                  mr-1
                  w-6
                  dark:text-gray-400
                `}
              >
                <ClockIcon />
              </div>

              <span>
                <strong>{hours}</strong> hours
              </span>
            </div>
          )}

          {weeks && (
            <div
              className={`
                inline-flex
                items-center
                mr-2.5
              `}
            >
              <div
                className={`
                  h-6
                  mr-1
                  w-6
                  dark:text-gray-400
                `}
              >
                <CalendarIcon />
              </div>

              <span>
                <strong>{weeks}</strong> weeks
              </span>
            </div>
          )}
        </footer>
      </article>
    </Card>
  )
}
