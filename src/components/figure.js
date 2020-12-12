import React from 'react'
import Img from 'gatsby-image'

export default ({
  alt,
  caption,
  fluid,
  ...props
}) => (
  <figure
    {...props}
  >
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
