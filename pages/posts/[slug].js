import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import prism from 'remark-prism'

import Breakout from '@/components/breakout'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PostMeta from '@/components/post-meta'
import RichPreview from '@/components/rich-preview'
import Tag from '@/components/tag'
import { getAllPosts, getPostBySlug } from '@/lib/api/posts'
import slugify from '@/lib/slugify'

export default function Post({
  post,
  source,
}) {
  const {
    attachments,
    author,
    categories,
    date,
    excerpt,
    figures,
    hero,
    heroAlt,
    heroCaption,
    title,
    slug,
    permalink,
  } = post

  const body = hydrate(source, {
    components: {
      Figure,
    }
  })

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog',
          url: '/posts'
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
        heroAlt={heroAlt}
        imageSubpath={`posts/${slug}`}
        permalink={permalink}
        publishedAt={date}
        tags={categories}
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

      <div className="break-words mb-8">
        {body}
      </div>

      <div className="flex flex-wrap">
        {categories.map(category => (
          <React.Fragment key={`category-${category}`}>
            <div className="mb-1 mr-1.5">
              <Tag href={`/categories/${slugify(category)}`}>
                {category}
              </Tag>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  const source = await renderToString(post.content, {
    components: {
      Figure,
    },
    scope: {
      attachments: post.attachments,
      figures: post.figures,
    },
    mdxOptions: {
      remarkPlugins: [prism],
    },
  })

  return {
    props: {
      post,
      source,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map(({ permalink }) => permalink),
    fallback: true,
  }
}
