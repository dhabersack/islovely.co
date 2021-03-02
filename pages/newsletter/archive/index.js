import React from 'react'

import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import NewsletterTeaser from '@/components/newsletter-teaser'
import RichPreview from '@/components/rich-preview'
import { getAllNewsletters } from '@/lib/api/newsletters'

export default function Archive({
  newsletters,
}) {
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
          <React.Fragment key={`newsletter-${newsletter.slug}`}>
            <NewsletterTeaser newsletter={newsletter} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const newsletters = await getAllNewsletters()

  return {
    props: {
      newsletters,
    },
  }
}
