import React from 'react'
import { graphql } from 'gatsby';

import { ConvertkitForm } from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({ data, location }) => {
  const newsletters = data.allMarkdownRemark.edges.map(({ node }) => node)

  const listItems = [
    'tips on design and development you can use immediately',
    'free previews of my upcoming course materials',
    'discount codes for my courses and products',
    'announcements of events I am going to speak at',
    'access to video recordings of past speaking gigs'
  ]

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter'
        }
      ]}
    >
      <MetaTags
        title="Newsletter"
      />

      <RichPreview
        permalink="/newsletter"
        title="Newsletter"
      />

      <Taper>
        <h1>More tips, straight to your inbox</h1>

        <p>
          In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
        </p>

        <ul className="list-style-none margin-bottom-m padding-0 xs:columns-10 xs:margin-horizontal-auto m:columns-8-of-10 l:columns-6-of-8">
          {listItems.map(listItem => (
            <li className="flex margin-bottom-xs" key={`newsletter-benefit-${listItem}`}>
              <div className="align-items-center border-color-blue-500 border-radius-round border-style-solid border-width-m flex-no-shrink height-24 inline-flex justify-center margin-right-xxs width-24 m:height-27 m:width-27">
                <img alt="" className="width-12 m:width-15" src="/assets/icons/checkmark--filled.svg" />
              </div>

              <span className="font-size-16-medium m:font-size-18-medium">
                {listItem}
              </span>
            </li>
          ))}
        </ul>

        <p>
          You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
        </p>

        <div className="margin-bottom-l">
          <ConvertkitForm svForm="1067424" uid="627637e2b6" sourceUrl={location.href} />
        </div>

        <h2>Featured newsletters</h2>

        <div className="margin-bottom-l">
          {newsletters.map(newsletter => (
            <div className="margin-bottom-m" key={`newsletter-${newsletter.id}`}>
              <NewsletterTeaser newsletter={newsletter} />
            </div>
          ))}
        </div>

        <a className="background-color-yellow-400 border-radius-xxs color-gray-900 inline-block font-size-14-short font-weight-500 padding-horizontal-m padding-vertical-s visited:color-gray-900" href="/newsletter/archive">
          Read all newsletters →
        </a>
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: {
            eq: "newsletter"
          }
        },
        frontmatter: {
          isFeatured: {
            eq: true
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
          }
          frontmatter {
            emoji
            title
          }
        }
      }
    }
  }
`
