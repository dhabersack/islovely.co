import React from 'react'

import A from './a'
import Card from './card'
import H2 from './h2'
import Img from './img'
import P from './p'
import Strong from './strong'

export default ({
  course,
}) => {
  const {
    fields,
    frontmatter,
  } = course

  const {
    permalink,
    slug,
  } = fields

  const {
    emails,
    excerpt,
    hours,
    title,
    videos,
    weeks,
  } = frontmatter

  return (
    <Card>
      <article
        className={`
          flex
          flex-column
          h-full
        `}
      >
        <a
          className={`
            bg-gray-100
            block
            intrinsic-ratio-16-by-9
          `}
          href={permalink}
        >
          <div
            className={`
              align-items-center
              flex
              justify-center
            `}
          >
            <Img
              alt={title}
              className="h-full"
              src={`/assets/courses/${slug}.png`}
            />
          </div>
        </a>

        <div
          className={`
            flex-grow
            padding-horizontal-s
            padding-vertical-s
          `}
        >
          <H2
            className={`
              font-size-16-short
              m-0
              mb-6
            `}
          >
            <A
              href={permalink}
            >
              {title}
            </A>
          </H2>

          <P
            className={`
              font-size-16-medium
              m-0
            `}
          >
            {excerpt}
          </P>
        </div>

        <footer
          className={`
            bg-gray-100
            flex
            flex-wrap
            font-size-12-medium
            padding-horizontal-s
            padding-vertical-s
            text-gray-600
          `}
        >
          {emails && (
            <div
              className={`
                align-items-center
                inline-flex
                mr-15
              `}
            >
              <Img
                alt=""
                className="mr-5"
                src="/assets/icons/email-with-letter.svg"
              />

              <span>
                <Strong>{emails}</Strong>
                {' '}
                emails
              </span>
            </div>
          )}

          {videos && (
            <div
              className={`
                align-items-center
                inline-flex
                mr-15
              `}
            >
              <Img
                alt=""
                className="mr-5"
                src="/assets/icons/video.svg"
              />

              <span>
                <Strong>{videos}</Strong>
                {' '}
                videos
              </span>
            </div>
          )}

          {hours && (
            <div
              className={`
                align-items-center
                inline-flex
                mr-15
              `}
            >
              <Img
                alt=""
                className="mr-5"
                src="/assets/icons/clock.svg"
              />

              <span>
                <Strong>{hours}</Strong>
                {' '}
                hours
              </span>
            </div>
          )}

          {weeks && (
            <div
              className={`
                align-items-center
                inline-flex
                mr-15
              `}
            >
              <Img
                alt=""
                className="mr-5"
                src="/assets/icons/calendar.svg"
              />

              <span>
                <Strong>{weeks}</Strong>
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
