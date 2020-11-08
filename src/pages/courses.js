import React from 'react'
import { graphql } from 'gatsby'

import A from '../components/a'
import CourseTeasers from '../components/course-teasers'
import H1 from '../components/h1'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import P from '../components/p'
import RichPreview from '../components/rich-preview'
import Strong from '../components/strong'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const courses = data.allMdx.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses'
        }
      ]}
    >
      <MetaTags
        title="Courses"
      />

      <RichPreview
        permalink="/courses"
        title="Courses"
      />

      <Taper>
        <H1>
          Courses
        </H1>

        <P>
          I offer <Strong>email- and video-courses</Strong> for designers and developers of any skill level. Email-courses land in your inbox over a few weeks, video-courses are binge-ready now. They are all <Strong>completely free</Strong>.
        </P>

        <P>
          I am always working on new content. Sign up to any course or <A href="/newsletter">join my newsletter</A> to catch announcements of upcoming material. If you want to learn about something in particular, tweet me at <A href="https://twitter.com/domhabersack">@domhabersack</A> and I’ll put it on my list!
        </P>
      </Taper>

      <div
        className="margin-bottom-xl"
      >
        <CourseTeasers
          courses={courses}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fields: {
          type: {
            eq: "course"
          }
        }
      },
      sort: {
        fields: fields___slug,
        order: ASC
      }
    ) {
      edges {
        node {
          id
          fields {
            permalink
            slug
          }
          frontmatter {
            emails
            excerpt
            hours
            title
            videos
            weeks
          }
        }
      }
    }
  }
`
