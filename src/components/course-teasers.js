import React from 'react'

import CourseTeaser from './course-teaser'

export default ({
  courses,
}) => (
  <div className="grid gap-8 grid-cols-1 sm:gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 2xl:gap-4 2xl:grid-cols-4">
    {courses.map(course => (
      <React.Fragment key={`course-teaser-${course.id}`}>
        <CourseTeaser course={course} />
      </React.Fragment>
    ))}
  </div>
)
