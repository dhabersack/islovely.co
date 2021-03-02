import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Breakout from '@/components/breakout'
import CalendarIcon from '@/components/icons/calendar'
import ClockIcon from '@/components/icons/clock'
import ConvertkitForm from '@/components/convertkit-form'
import EmailWithLetterIcon from '@/components/icons/email-with-letter'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import Video from '@/components/video'
import VideoIcon from '@/components/icons/video'

export default function Course({
  data,
  location,
}) {
  const {
    body,
    frontmatter,
    permalink,
  } = data.course

  const {
    cta,
    emails,
    excerpt,
    hours,
    title,
    svForm,
    playlist,
    uid,
    videos,
    weeks,
  } = frontmatter

  const meta = {
    emails: {
      value: emails,
      Icon: EmailWithLetterIcon,
    },
    videos: {
      value: videos,
      Icon: VideoIcon,
    },
    hours: {
      value: hours,
      Icon: ClockIcon,
    },
    weeks: {
      value: weeks,
      Icon: CalendarIcon,
    },
  }

  const isSignupPossible = svForm !== null && uid !== null

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses',
          url: '/courses'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <div className="mb-12">
        <h1>
          {title}
        </h1>

        <aside className="bg-gray-100 flex flex-wrap mb-6 px-4 py-3 space-x-5 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          {Object.entries(meta).map(([type, {
            Icon,
            value,
          }]) => value && (
            <React.Fragment key={`meta-${type}`}>
              <div className="flex items-center space-x-1">
                <div className="h-6 w-6 dark:text-gray-400">
                  <Icon />
                </div>

                <span>
                  <strong>{value}</strong> {type}
                </span>
              </div>
            </React.Fragment>
          ))}
        </aside>

        <MDXRenderer>
          {body}
        </MDXRenderer>

        {isSignupPossible && (
          <ConvertkitForm
            cta={cta}
            sourceUrl={location.href}
            svForm={svForm}
            uid={uid}
          />
        )}
      </div>

      {playlist && (
        <Breakout>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {playlist.map(({
              duration,
              title,
              vimeoId,
              youtubeId,
            }, index) => (
              <div key={`video-${title}`}>
                <div className="mb-1">
                  <Video
                    title={title}
                    vimeoId={vimeoId}
                    youtubeId={youtubeId}
                  />
                </div>

                <h4 className="font-normal leading-snug text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    #{index + 1}
                  </span>

                  {' '}

                  {title}

                  {' '}

                  <span className="text-gray-500 dark:text-gray-400">
                    ({duration})
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </Breakout>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    course(
      slug: {
        eq: $slug
      }
    ) {
      body
      frontmatter {
        cta
        emails
        excerpt
        hours
        playlist {
          duration
          title
          vimeoId
        }
        svForm
        title
        uid
        videos
        weeks
      }
      permalink
    }
  }
`
