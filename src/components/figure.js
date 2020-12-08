import React from 'react'

export default ({
  alt,
  caption,
  src,
  ...props
}) => (
  <figure
    {...props}
  >
    <img
      alt={alt}
      className="w-full"
      src={src}
    />

    {caption != null ? (
      <figcaption>
        {caption}
      </figcaption>
    ) : null}
  </figure>
)
