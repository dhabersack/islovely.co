import React from 'react'

import Grid from './grid'
import ProjectTeaser from './project-teaser'

export default function ProjectTeasers({
  projects,
}) {
  return (
    <Grid>
      {projects.map(project => (
        <React.Fragment key={`project-teaser-${project.id}`}>
          <ProjectTeaser project={project} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
