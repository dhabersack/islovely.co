import React from 'react'
import Img from 'gatsby-image'

export default function Figure({
  alt,
  caption,
  fluid,
  ...props
}) {
  return (
    <figure {...props}>
      <Img
        alt={alt}
        fluid={fluid}
      />

      {caption != null ? (
        <figcaption>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
