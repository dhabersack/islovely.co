import React from 'react'

export default function UppercaseHeading ({
  children,
}) {
  return (
    <h2 className="font-bold m-0 mb-1 text-sm uppercase">
      {children}
    </h2>
  )
}
