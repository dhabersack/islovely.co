import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import ConvertkitForm from '../components/convertkit-form'
import H1 from '../components/h1'
import H4 from '../components/h4'
import Img from '../components/img'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Strong from '../components/strong'
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

      <Taper>
        <H1>
          {title}
        </H1>

        <aside
          className={`
            flex
            flex-wrap
            font-size-12-medium
            mb-12
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
                <Strong>{emails}</Strong> emails
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
                <Strong>{videos}</Strong> videos
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
                <Strong>{hours}</Strong> hours
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
                <Strong>{weeks}</Strong> weeks
              </span>
            </div>
          )}
        </aside>

        <MDXRenderer>
          {body}
        </MDXRenderer>

        {isSignupPossible && (
          <div
            className="mb-60"
          >
            <ConvertkitForm
              cta={cta}
              sourceUrl={location.href}
              svForm={svForm}
              uid={uid}
            />
          </div>
        )}
      </Taper>

      {playlist && (
        <div
          className={`
            grid
            grid-columns-1
            grid-column-gap
            grid-row-gap-25
            xs:grid-columns-2
            xs:grid-row-gap-10
            m:grid-columns-3
            m:grid-row-gap-20
            l:grid-row-gap-25
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
                className="mb-3"
              >
                <Video
                  title={title}
                  vimeoId={vimeoId}
                  youtubeId={youtubeId}
                />
              </div>

              <H4
                className={`
                  font-size-16-short
                  font-weight-400
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
              </H4>
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
