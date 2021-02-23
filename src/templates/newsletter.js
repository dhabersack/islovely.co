import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Breakout from '../components/breakout'
import Figure from '../components/figure'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
import RichPreview from '../components/rich-preview'
import PostMeta from '../components/post-meta'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'

export default function Newsletter({
  data,
}) {
  const {
    body,
    date,
    frontmatter,
    hero,
    permalink,
    slug,
  } = data.newsletter

  const {
    author,
    excerpt,
    figures,
    heroAlt,
    heroCaption,
    related,
    title,
  } = frontmatter

  const authorName = author.frontmatter.name
  const avatarFluid = author.avatar.childImageSharp.fluid
  const hasRelatedIssues = related?.length > 0

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

      <h1>
        {title}
      </h1>

      <div className="mb-6">
        <PostMeta
          author={authorName}
          avatarFluid={avatarFluid}
          date={date}
        />
      </div>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          fluid={hero.childImageSharp.fluid}
        />
      </Breakout>

      <MDXRenderer figures={mapFiguresToNamedObject(figures)}>
        {body}
      </MDXRenderer>

      {hasRelatedIssues && (
        <div className="mt-24">
          <h2 className="m-0 mb-3 text-xl">
            Related issues
          </h2>

          <div className="grid gap-12 grid-cols-1">
            {related.map(newsletter => (
              <React.Fragment key={`newsletter-${newsletter.id}`}>
                <NewsletterTeaser newsletter={newsletter} />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
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
        heroAlt
        heroCaption
        related {
          date
          frontmatter {
            excerpt
            issue
            title
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 240) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          id
          permalink
          slug
        }
        title
      }
      hero {
        childImageSharp {
          fluid(maxWidth: 1504) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      id
      permalink
      slug
    }
  }
`
