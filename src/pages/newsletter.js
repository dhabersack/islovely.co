import React from 'react'
import { graphql } from 'gatsby';

import A from '../components/a'
import ConvertkitForm from '../components/convertkit-form'
import H1 from '../components/h1'
import H2 from '../components/h2'
import Img from '../components/img'
import Layout from '../components/layout'
import Li from '../components/li'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
import P from '../components/p'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({
  data,
  location,
}) => {
  const newsletters = data.allMdx.edges.map(({ node }) => node)

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
        <H1>
          More tips, straight to your inbox
        </H1>

        <P>
          In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
        </P>

        <ul
          className={`
            list-style-none
            mb-24
            padding-0
            s:columns-10-of-12
            s:mx-auto
            m:columns-8-of-10
            l:columns-6-of-8
          `}
        >
          {listItems.map(listItem => (
            <Li
              className={`
                flex
                mb-12
              `}
              key={`newsletter-benefit-${listItem}`}
            >
              <Img
                alt=""
                className={`
                  flex-no-shrink
                  height-24
                  mr-10
                  w-24
                  m:height-27
                  m:w-27
                `}
                src="/assets/icons/checkmark.svg"
              />

              <span
                className={`
                  font-size-16-medium
                  m:font-size-18-medium
                `}
              >
                {listItem}
              </span>
            </Li>
          ))}
        </ul>

        <P>
          You can find <A href="/newsletter/archive">all previous newsletters</A> in the archive. Get this bonus content before everybody else!
        </P>

        <div
          className="mb-48"
        >
          <ConvertkitForm
            sourceUrl={location.href}
            svForm="1067424"
            uid="627637e2b6"
          />
        </div>

        <H2>
          Featured newsletters
        </H2>

        <div
          className="mb-48"
        >
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
        </div>

        <a
          className={`
            bg-yellow-400
            border-radius-xxs
            color-gray-900
            font-size-14-short
            font-weight-500
            inline-block
            padding-horizontal-m
            padding-vertical-s
            visited:color-gray-900
          `}
          href="/newsletter/archive"
        >
          Read all newsletters →
        </a>
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
          fields {
            date
            permalink
          }
          frontmatter {
            issue
            title
          }
          id
        }
      }
    }
  }
`
