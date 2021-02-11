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

      <div className="mb-12">
        <h1>
          Projects
        </h1>
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
            title
          }
          id
          permalink
          slug
        }
      }
    }
  }
`
