import React from 'react'

import Img from './img'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  alt,
  caption,
  className,
  src,
  ...props
}) => (
  <figure
    className={mergeClassnames(`
      mx-auto
      my-24
      w-full
      l:my-48
    `, className)}
    {...props}
  >
    <Img
      alt={alt}
      className="w-full"
      src={src}
    />

    {caption != null ? (
      <figcaption
        className={`
          font-size-14-short
          italic
          m-0
          mt-6
          text-align-center
          text-gray-600
        `}
      >
        {caption}
      </figcaption>
    ) : null}
  </figure>
)
