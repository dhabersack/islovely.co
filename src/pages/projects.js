import React from 'react'
import { graphql } from 'gatsby'

import Breakout from '../components/breakout'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import ProjectTeasers from '../components/project-teasers'
import RichPreview from '../components/rich-preview'

export default function Projects({
  data,
}) {
  const projects = data.allProject.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects'
        }
      ]}
    >
      <MetaTags title="Projects" />

      <RichPreview
        permalink="/projects"
        title="Projects"
      />

      <div className="mb-8">
        <h1>
          Projects
        </h1>

        <p>
          I am working on a few free and paid products, trying to earn an income with them over time. This catalog will expand as I add new experiments and try new venues.
        </p>
      </div>

      <Breakout>
        <ProjectTeasers projects={projects} />
      </Breakout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allProject(
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            excerpt
            heroAlt
            title
            revenue
            url
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          id
          permalink
        }
      }
    }
  }
`
