import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import Video from '../components/video'

export default ({
  data,
  location,
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = data.mdx

  const {
    permalink,
  } = fields

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

  const isSignupPossible = svForm !== null && uid !== null

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses',
          url: '/courses/'
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

      <Taper
        className="mb-12"
      >
        <h1>
          {title}
        </h1>

        <aside
          className={`
            flex
            flex-wrap
            mb-3
            text-xs
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
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/email-with-letter.svg"
              />

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
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/video.svg"
              />

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
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/clock.svg"
              />

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
              <img
                alt=""
                className="mr-1"
                src="/assets/icons/calendar.svg"
              />

              <span>
                <strong>{weeks}</strong> weeks
              </span>
            </div>
          )}
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
      </Taper>

      {playlist && (
        <div
          className={`
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
          `}
        >
          {playlist.map(({
            duration,
            title,
            vimeoId,
            youtubeId,
          }, index) => (
            <div
              key={`video-${title}`}
            >
              <div
                className="mb-1"
              >
                <Video
                  title={title}
                  vimeoId={vimeoId}
                  youtubeId={youtubeId}
                />
              </div>

              <h4
                className={`
                  font-normal
                  leading-snug
                  text-base
                `}
              >
                <span
                  className="text-gray-500"
                >
                  #{index + 1}
                </span>

                {' '}

                {title}

                {' '}

                <span
                  className="text-gray-500"
                >
                  ({duration})
                </span>
              </h4>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      body
      fields {
        permalink
      }
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
    }
  }
`
