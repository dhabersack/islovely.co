import React from 'react'

export default function Container({
  children,
}) {
  return (
    <div className="max-w-3xl mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
      {children}
    </div>
  )
}
