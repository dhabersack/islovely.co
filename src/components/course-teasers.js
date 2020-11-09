import React from 'react'

import CourseTeaser from './course-teaser'

export default ({
  courses,
}) => (
  <div
    className={`
      grid
      grid-columns-1
      grid-column-gap
      grid-row-gap-25
      s:grid-columns-2
      s:grid-row-gap-15
      m:grid-columns-3
      m:grid-row-gap-20
      xl:grid-columns-4
    `}
  >
    {courses.map(course => (
      <CourseTeaser
        course={course}
        key={`course-teaser-${course.id}`}
      />
    ))}
  </div>
)
