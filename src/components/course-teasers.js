import React from 'react'

import CourseTeaser from './course-teaser'

export default ({
  courses,
}) => (
  <div
    className={`
      grid
      gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      2xl:grid-cols-4
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
