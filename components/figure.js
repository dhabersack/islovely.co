import React from 'react'
import Image from 'next/image'

export default function Figure({
  alt,
  caption,
  src,
  ...props
}) {
  return (
    <figure {...props}>
      <Image
        alt={alt}
        height="810"
        src={src}
        width="1440"
      />

      {caption != null ? (
        <figcaption>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
