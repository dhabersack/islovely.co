import React from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import Breakout from '../../components/breakout'
import CoinsIcon from '../../components/icons/coins'
import Figure from '../../components/figure'
import Layout from '../../components/layout'
import LinkIcon from '../../components/icons/link'
import MetaTags from '../../components/meta-tags'
import RichPreview from '../../components/rich-preview'
import Stack from '../../components/stack'
import { getAllProjects, getProjectBySlug } from '../../lib/api/projects'

export default function Project({
  project,
  source,
}) {
  const {
    excerpt,
    figures,
    hero,
    heroAlt,
    heroCaption,
    permalink,
    revenue,
    slug,
    stack,
    title,
    url,
  } = project

  const body = hydrate(source, {
    components: {
      Figure,
    }
  })

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects',
          url: '/projects'
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
        imageSubpath={`projects/${slug}`}
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      <aside className="bg-gray-100 flex flex-wrap justify-between mb-6 px-4 py-3 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
        <div className="flex items-center space-x-1">
          <div className="h-6 w-6 dark:text-gray-400">
            <CoinsIcon />
          </div>

          <span>
            Revenue: <strong>${revenue}</strong>/month
          </span>
        </div>

        <a
          className="flex items-center"
          href={url}
        >
          <div className="h-6 w-6">
            <LinkIcon />
          </div>

          <span>
            Website
          </span>
        </a>
      </aside>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          src={hero}
        />
      </Breakout>

      {body}

      <div className="mt-8">
        <Stack stack={stack} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug)

  const source = await renderToString(project.content, {
    components: {
      Figure,
    },
    scope: {
      figures: project.figures,
    },
  })

  return {
    props: {
      project,
      source,
    },
  }
}

export async function getStaticPaths() {
  const projects = await getAllProjects()

  return {
    paths: projects.map(({ permalink }) => permalink),
    fallback: true,
  }
}
