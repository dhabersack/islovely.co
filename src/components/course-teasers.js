import React from 'react'

import CourseTeaser from './course-teaser'
import Grid from './grid'

export default function CourseTeasers({
  courses,
}) {
  return (
    <Grid>
      {courses.map(course => (
        <React.Fragment key={`course-teaser-${course.id}`}>
          <CourseTeaser course={course} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
