import React from 'react'
import { graphql } from 'gatsby'

import A from '../../components/a'
import H1 from '../../components/h1'
import Layout from '../../components/layout'
import MetaTags from '../../components/meta-tags'
import NewsletterTeaser from '../../components/newsletter-teaser'
import P from '../../components/p'
import RichPreview from '../../components/rich-preview'
import Taper from '../../components/taper'

export default ({
  data,
}) => {
  const newsletters = data.allMdx.edges.map(({ node }) => node)

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

      <Taper>
        <H1>
          Newsletter archive
        </H1>

        <P>
          These are some of my previous newsletters. <A href="/newsletter">Sign up</A> if you want to get them delivered straight to your inbox.
        </P>

        {newsletters.map(newsletter => (
          <div
            className="mb-24"
            key={`newsletter-${newsletter.id}`}
          >
            <NewsletterTeaser
              newsletter={newsletter}
            />
          </div>
        ))}
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
            eq: "newsletter"
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
            date
            permalink
            slug
          }
          frontmatter {
            issue
            title
          }
        }
      }
    }
  }
`
