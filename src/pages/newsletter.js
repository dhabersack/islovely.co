import React from 'react'
import { graphql } from 'gatsby';

import Card from '../components/card'
import CircledCheckmark from '../icons/circled-checkmark'
import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

const BENEFITS = [
  'tips on design and development you can use immediately',
  'free previews of my upcoming course materials',
  'discount codes for my courses and products',
  'announcements of events I am going to speak at',
  'access to video recordings of past speaking gigs'
]

export default ({
  data,
  location,
}) => {
  const newsletters = data.allNewsletter.edges.map(({ node }) => node)

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
        imageSubpath="newsletter"
        permalink="/newsletter"
        title="Newsletter"
      />

      <Taper>
        <h1>
          More tips, straight to your inbox
        </h1>

        <p>
          In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
        </p>

        <ul className="list-none my-6 p-0 space-y-3">
          {BENEFITS.map(listItem => (
            <li
              className="flex m-0"
              key={`newsletter-benefit-${listItem}`}
            >
              <div className="flex-shrink-0 h-6 mr-1 text-green-300 w-6 dark:text-green-500">
                <CircledCheckmark />
              </div>

              <span className="text-base">
                {listItem}
              </span>
            </li>
          ))}
        </ul>

        <p>
          You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
        </p>

        <div className="mb-12">
          <Card>
            <div className="bg-gray-100 p-4 dark:bg-gray-900">
              <ConvertkitForm
                sourceUrl={location.href}
                svForm="1067424"
                uid="627637e2b6"
              />
            </div>
          </Card>
        </div>

        <h2>
          Featured newsletters
        </h2>

        <div className="grid gap-10 grid-cols-1 mb-8">
          {newsletters.map(newsletter => (
            <NewsletterTeaser
              key={`newsletter-${newsletter.id}`}
              newsletter={newsletter}
            />
          ))}
        </div>

        <a href="/newsletter/archive">
          Read all issues &rarr;
        </a>
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allNewsletter(
      filter: {
        frontmatter: {
          isFeatured: {
            eq: true
          }
        }
      },
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
            issue
            title
          }
          id
          permalink
        }
      }
    }
  }
`
