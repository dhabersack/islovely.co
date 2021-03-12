import Breakout from '@/components/breakout'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import NewsletterTeaser from '@/components/newsletter-teaser'
import RichPreview from '@/components/rich-preview'
import PostMeta from '@/components/post-meta'
import { getAllNewsletters, getNewsletterBySlug } from '@/lib/api/newsletters'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Newsletter({
  author,
  date,
  excerpt,
  hero,
  heroAlt,
  heroCaption,
  mdxSource,
  permalink,
  related,
  slug,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

  const breadcrumbs = [
    {
      label: 'Newsletter',
      url: '/newsletter',
    }, {
      label: 'Archive',
      url: '/newsletter/archive',
    }, {
      label: title,
    },
  ]

  const hasRelatedIssues = related?.length > 0

  return (
    <Layout breadcrumbs={breadcrumbs}>
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
              <NewsletterTeaser
                key={`newsletter-${newsletter.slug}`}
                newsletter={newsletter}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const newsletter = await getNewsletterBySlug(params.slug)

  return {
    props: newsletter,
  }
}

export async function getStaticPaths() {
  const newsletters = await getAllNewsletters()

  return {
    fallback: false,
    paths: newsletters.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
  }
}
