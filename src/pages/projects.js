import React from 'react'
import { graphql } from 'gatsby'

import A from '../components/a'
import H1 from '../components/h1'
import H2 from '../components/h2'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import P from '../components/p'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
}) => {
  const projects = data.allMdx.edges.map(({ node }) => node)

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
        <H1>
          Projects
        </H1>

        {projects.map(({
          fields,
          frontmatter,
          id,
        }) => {
          const {
            permalink,
          } = fields

          const {
            excerpt,
            title,
          } = frontmatter

          return (
            <React.Fragment
              key={`project-${id}`}
            >
              <H2>
                <A
                  href={permalink}
                >
                  {title}
                </A>
              </H2>

              <P>
                {excerpt}
              </P>
            </React.Fragment>
          )
        })}
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: {
        fields: {
          type: {
            eq: "project"
          }
        }
      },
      sort: {
        fields: fields___date,
        order: DESC
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
            excerpt
            title
          }
        }
      }
    }
  }
`
