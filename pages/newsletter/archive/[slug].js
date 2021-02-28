import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import Breakout from '../../../components/breakout'
import Figure from '../../../components/figure'
import Layout from '../../../components/layout'
import MetaTags from '../../../components/meta-tags'
import NewsletterTeaser from '../../../components/newsletter-teaser'
import RichPreview from '../../../components/rich-preview'
import PostMeta from '../../../components/post-meta'
import mapFiguresToNamedObject from '../../../lib/map-figures-to-named-object'
import { getAllNewsletters, getNewsletterBySlug } from '../../../lib/api/newsletters'

export default function Newsletter({
  newsletter,
  source,
}) {
  const {
    author,
    date,
    excerpt,
    hero,
    heroAlt,
    heroCaption,
    permalink,
    related,
    slug,
    title,
  } = newsletter

  const authorName = author.name
  const avatar = author.avatar
  const hasRelatedIssues = related?.length > 0

  const body = hydrate(source, {
    components: {
      Figure,
    }
  })

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
          author={author.name}
          avatar={author.avatar}
          date={date}
        />
      </div>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          src={hero}
        />
      </Breakout>

      {body}

      {hasRelatedIssues && (
        <div className="mt-24">
          <h2 className="m-0 mb-3 text-xl">
            Continue reading
          </h2>

          <div className="grid gap-12 grid-cols-1">
            {related.map(newsletter => (
              <React.Fragment key={`newsletter-${newsletter.slug}`}>
                <NewsletterTeaser newsletter={newsletter} />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const newsletter = await getNewsletterBySlug(params.slug)

  const source = await renderToString(newsletter.content, {
    components: {
      Figure,
    },
    scope: {
      figures: newsletter.figures,
    },
  })

  return {
    props: {
      newsletter,
      source,
    },
  }
}

export async function getStaticPaths() {
  const newsletters = await getAllNewsletters()

  return {
    paths: newsletters.map(({ slug }) => `/newsletter/archive/${slug}`),
    fallback: true,
  }
}
