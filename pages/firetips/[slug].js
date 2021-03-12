import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import Tag from '@/components/tag'
import { getAllFiretips, getFiretipBySlug } from '@/lib/api/firetips'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Firetip({
  mdxSource,
  permalink,
  tags,
  title,
}) {
  const body = hydrateMDXSource(mdxSource)

  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips',
    }, {
      label: title,
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags title={title} />

      <RichPreview
        imageSubpath="firetips"
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      {body}

      <div className="flex flex-wrap">
        {tags.map(tag => (
          <div
            className="mb-3 mr-2.5"
            key={`tag-${tag.slug}`}
          >
            <Tag href={tag.permalink}>
              {tag.title}
            </Tag>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const firetip = await getFiretipBySlug(params.slug)

  return {
    props: firetip,
  }
}

export async function getStaticPaths() {
  const firetips = await getAllFiretips()

  return {
    paths: firetips.map(({ permalink }) => permalink),
    fallback: true,
  }
}
