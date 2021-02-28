import React from 'react'

import Card from '../components/card'
import CircledCheckmark from '../components/icons/circled-checkmark'
import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterTeaser from '../components/newsletter-teaser'
import RichPreview from '../components/rich-preview'
import { getFeaturedNewsletters } from '../lib/api/newsletters'

const BENEFITS = [
  'tips on design and development you can use immediately',
  'free previews of my upcoming course materials',
  'discount codes for my courses and products',
  'announcements of events I am going to speak at',
  'access to video recordings of past speaking gigs'
]

export default function Newsletter({
  newsletters,
}) {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter'
        }
      ]}
    >
      <MetaTags
        description="Weekly tips on design, development, and working smarter."
        title="Newsletter"
      />

      <RichPreview
        description="Weekly tips on design, development, and working smarter."
        imageSubpath="pages/newsletter"
        permalink="/newsletter"
        title="Newsletter"
      />

      <h1>
        More tips, straight to your inbox
      </h1>

      <p>
        In addition to what I share on this site, I send out a weekly newsletter with tips to help you work smarter. By signing up, you get access to:
      </p>

      <ul className="list-none my-6 p-0 space-y-3">
        {BENEFITS.map(listItem => (
          <React.Fragment key={`newsletter-benefit-${listItem}`}>
            <li className="flex m-0">
              <div className="flex-shrink-0 h-6 mr-1 text-green-300 w-6 dark:text-green-500">
                <CircledCheckmark />
              </div>

              <span className="text-base">
                {listItem}
              </span>
            </li>
          </React.Fragment>
        ))}
      </ul>

      <p>
        You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
      </p>

      <div className="mb-12">
        <Card>
          <div className="bg-gray-100 px-4 py-3 dark:bg-gray-900">
            <ConvertkitForm
              sourceUrl="UNKNOWN"
              svForm="1067424"
              uid="627637e2b6"
            />
          </div>
        </Card>
      </div>

      <h2>
        Featured newsletters
      </h2>

      <div className="grid gap-12 grid-cols-1 mb-8">
        {newsletters.map(newsletter => (
          <React.Fragment key={`newsletter-${newsletter.slug}`}>
            <NewsletterTeaser newsletter={newsletter} />
          </React.Fragment>
        ))}
      </div>

      <a href="/newsletter/archive">
        Read all issues &rarr;
      </a>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      newsletters: await getFeaturedNewsletters(),
    },
  }
}
