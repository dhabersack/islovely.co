import React from 'react'
import Image from 'next/image'

export default function Figure({
  alt,
  caption,
  fluid,
  ...props
}) {
  return (
    <figure {...props}>
      <Image
        alt={alt}
        height="810"
        src="http://www.fillmurray.com/1400/810"
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
