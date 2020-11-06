import React from 'react'

import A from './a'

export default () => (
  <nav>
    <ul
      className={`
        flex
        flex-wrap
        font-size-16-short
        font-weight-500
        list-style-none
        margin-0
        padding-0
      `}
    >
      <li
        className={`
          margin-right-xs
          xs:margin-right-s
        `}
      >
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/courses"
        >
          Courses
        </A>
      </li>

      <li
        className={`
          margin-right-xs
          xs:margin-right-s
        `}
      >
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/posts"
        >
          Blog
        </A>
      </li>

      <li
        className={`
          margin-right-xs
          xs:margin-right-s
        `}
      >
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/firetips"
        >
          Fire tips
        </A>
      </li>

      <li
        className={`
          margin-right-xs
          xs:margin-right-s
        `}
      >
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/newsletter"
        >
          Newsletter
        </A>
      </li>

      <li
        className={`
          margin-right-xs
          xs:margin-right-s
        `}
      >
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/about"
        >
          About
        </A>
      </li>

      <li>
        <A
          className={`
            inline-block
            padding-vertical-xs
          `}
          href="/contact"
        >
          Contact
        </A>
      </li>
    </ul>
  </nav>
)
