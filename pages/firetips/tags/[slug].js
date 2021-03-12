import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import slugify from '@/lib/slugify'
import { getAllTags, getTagWithFiretipsBySlug } from '@/lib/api/firetip-tags'

export default function Tag({
  firetips,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips',
    }, {
      label: 'By tag',
      url: '/firetips/tags',
    }, {
      label: title,
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title={`Fire tips tagged “${title}”`} />

      <RichPreview
        permalink={permalink}
        title={`Fire tips tagged “${title}”`}
      />

      <h1>
        Fire tips tagged “{title}”
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
  const tag = await getTagWithFiretipsBySlug(params.slug)

  return {
    props: tag,
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags()

  return {
    fallback: false,
    paths: tags.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
  }
}
