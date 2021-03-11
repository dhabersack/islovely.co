import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import slugify from '@/lib/slugify'
import { getAllFiretips, getFiretipsByTag } from '@/lib/api/firetips'

export default function Tag({
  firetips,
  tag,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips'
    }, {
      label: 'By tag',
      url: '/firetips/tags'
    }, {
      label: tag
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title={`Fire tips tagged “${tag}”`} />

      <RichPreview
        permalink={`/firetips/tags/${slugify(tag)}`}
        title={`Fire tips tagged “${tag}”`}
      />

      <h1>
        Fire tips tagged “{tag}”
      </h1>

      <div className="grid gap-6">
        {firetips.map(firetip => (
          <Firetip
            firetip={firetip}
            key={`firetip-${firetip.slug}`}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const firetips = await getFiretipsByTag(params.slug)

  return {
    props: {
      firetips,
      tag: params.slug,
    },
  }
}

export async function getStaticPaths() {
  const firetips = await getAllFiretips()

  const tags = [...new Set(firetips.map(firetip => firetip.tags).flat(1))]

  return {
    paths: tags.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  }
}
