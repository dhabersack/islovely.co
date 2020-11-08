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
      l:mb-48
      l:mt-48
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
          color-gray-500
          font-size-12-short
          italic
          m-0
          mt-6
          text-align-center
        `}
      >
        {caption}
      </figcaption>
    ) : null}
  </figure>
)
