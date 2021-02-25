import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import NewsletterTeaser from '../../components/newsletter-teaser'
import RichPreview from '../../components/rich-preview'

export default ({
  data,
}) => {
  const newsletters = data.allNewsletter.edges.map(({ node }) => node)

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
        }
      ]}
    >
      <MetaTags
        description="Read some of my previous newsletters. Sign up to get them delivered to your inbox."
        title="Newsletter archive"
      />

      <RichPreview
        description="Read some of my previous newsletters. Sign up to get them delivered to your inbox."
        permalink="/newsletter/archive"
        title="Newsletter archive"
      />

      <h1>
        Newsletter archive
      </h1>

      <p className="mb-12">
        These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
      </p>

      <div className="grid gap-12 grid-cols-1">
        {newsletters.map(newsletter => (
          <React.Fragment key={`newsletter-${newsletter.id}`}>
            <NewsletterTeaser newsletter={newsletter} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allNewsletter(
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          date
          frontmatter {
            excerpt
            heroAlt
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
      }
    }
  }
`
