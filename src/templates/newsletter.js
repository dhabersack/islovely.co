import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import PostMeta from '../components/post-meta'
import Taper from '../components/taper'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'

export default ({
  data,
}) => {
  const {
    body,
    date,
    frontmatter,
    permalink,
    slug,
  } = data.newsletter

  const {
    author,
    excerpt,
    figures,
    title,
  } = frontmatter

  const authorName = author.frontmatter.name
  const avatarFluid = author.avatar.childImageSharp.fluid

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
          url: '/newsletter/archive'
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
        imageSubpath={`newsletter/${slug}`}
        permalink={permalink}
        publishedAt={date}
        title={title}
        type="article"
      />

      <Taper>
        <h1>
          {title}
        </h1>

        <div
          className="mb-6"
        >
          <PostMeta
            author={authorName}
            avatarFluid={avatarFluid}
            date={date}
          />
        </div>

        <MDXRenderer
          figures={mapFiguresToNamedObject(figures)}
        >
          {body}
        </MDXRenderer>
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    newsletter(
      slug: {
        eq: $slug
      }
    ) {
      body
      date
      frontmatter {
        author {
          avatar {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          frontmatter {
            name
          }
        }
        excerpt
        figures {
          name
          childImageSharp {
            fluid(maxWidth: 1008) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        title
      }
      permalink
      slug
    }
  }
`
