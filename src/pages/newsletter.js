import React from 'react'
import { graphql } from 'gatsby';

import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
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
        permalink="/newsletter/"
        title="Newsletter"
      />

      <Taper>
        <h1>
          More tips, straight to your inbox
        </h1>

        <p>
          In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
        </p>

        <ul
          className={`
            list-none
            my-6
            p-0
            space-y-3
          `}
        >
          {listItems.map(listItem => (
            <li
              className={`
                flex
                m-0
              `}
              key={`newsletter-benefit-${listItem}`}
            >
              <img
                alt=""
                className={`
                  flex-no-shrink
                  h-6
                  mr-1.5
                  w-6
                `}
                src="/assets/icons/checkmark.svg"
              />

              <span
                className={`
                  text-base
                `}
              >
                {listItem}
              </span>
            </li>
          ))}
        </ul>

        <p>
          You can find <a href="/newsletter/archive/">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
        </p>

        <div
          className="mb-12"
        >
          <ConvertkitForm
            sourceUrl={location.href}
            svForm="1067424"
            uid="627637e2b6"
          />
        </div>

        <h2>
          Featured newsletters
        </h2>

        <div
          className={`
            grid
            gap-10
            grid-cols-1
            mb-8
          `}
        >
          {newsletters.map(newsletter => (
            <NewsletterTeaser
              key={`newsletter-${newsletter.id}`}
              newsletter={newsletter}
            />
          ))}
        </div>

        <a
          className={`
            bg-yellow-300
            text-sm
            font-medium
            inline-block
            px-5
            py-3
            rounded-lg
            shadow-sm
            text-gray-900
            focus:ring
            focus:ring-yellow-600
            focus:ring-opacity-50
            visited:text-gray-900
          `}
          href="/newsletter/archive/"
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
            excerpt
            issue
            title
          }
          id
        }
      }
    }
  }
`
