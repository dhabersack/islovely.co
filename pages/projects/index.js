import React from 'react'

import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import ProjectTeasers from '@/components/project-teasers'
import RichPreview from '@/components/rich-preview'
import { getAllProjects } from '@/lib/api/projects'

export default function Projects({
  projects,
}) {
  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Projects'
        }
      ]}
    >
      <MetaTags
        description="I am working on a few free and paid products, trying to earn an income with them over time."
        title="Projects"
      />

      <RichPreview
        description="I am working on a few free and paid products, trying to earn an income with them over time."
        imageSubpath="pages/posts"
        permalink="/projects"
        title="Projects"
      />

      <div className="mb-8">
        <h1>
          Projects
        </h1>

        <p>
          I am working on a few free and paid products, trying to earn an income with them over time. This catalog will expand as I add new experiments and try new venues.
        </p>
      </div>

      <Breakout>
        <ProjectTeasers projects={projects} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: {
      projects,
    },
  }
}
