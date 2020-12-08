import React from 'react'

import Card from './card'

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
          border-${highlightColor}
          border-solid
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
            px-4
            py-2
          `}
        >
          <h2
            className={`
              text-base
              m-0
              mb-1.5
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
              text-base
              m-0
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
            px-2.5
            py-3
            text-gray-600
            text-xs
          `}
        >
          {emails && (
            <div
              className={`
                items-center
                inline-flex
                mr-2.5
              `}
            >
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/email-with-letter.svg"
              />

              <span>
                <strong>{emails}</strong>
                {' '}
                emails
              </span>
            </div>
          )}

          {videos && (
            <div
              className={`
                items-center
                inline-flex
                mr-2.5
              `}
            >
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/video.svg"
              />

              <span>
                <strong>{videos}</strong>
                {' '}
                videos
              </span>
            </div>
          )}

          {hours && (
            <div
              className={`
                items-center
                inline-flex
                mr-2.5
              `}
            >
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/clock.svg"
              />

              <span>
                <strong>{hours}</strong>
                {' '}
                hours
              </span>
            </div>
          )}

          {weeks && (
            <div
              className={`
                items-center
                inline-flex
                mr-2.5
              `}
            >
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/calendar.svg"
              />

              <span>
                <strong>{weeks}</strong>
                {' '}
                weeks
              </span>
            </div>
          )}
        </footer>
      </article>
    </Card>
  )
}
