import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const projects = data.allProject.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects'
        }
      ]}
    >
      <MetaTags
        title="Projects"
      />

      <RichPreview
        permalink="/projects/"
        title="Projects"
      />

      <Taper>
        <h1>
          Projects
        </h1>

        {projects.map(({
          frontmatter,
          id,
          permalink,
        }) => {
          const {
            excerpt,
            title,
          } = frontmatter

          return (
            <React.Fragment
              key={`project-${id}`}
            >
              <h2>
                <a
                  href={permalink}
                >
                  {title}
                </a>
              </h2>

              <p>
                {excerpt}
              </p>
            </React.Fragment>
          )
        })}
      </Taper>
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
