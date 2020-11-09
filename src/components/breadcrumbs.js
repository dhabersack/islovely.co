import React from 'react'

import A from './a'

export default ({
  breadcrumbs,
}) => breadcrumbs ? (
  <nav
    className={`
      font-size-14-medium
      font-weight-500
      mb-24
    `}
  >
    {[
      {
        label: 'Home',
        url: '/'
      },
      ...breadcrumbs
    ].map(({
      label,
      url
    }) => url ? (
      <React.Fragment
        key={`breadcrumb-${label}`}
      >
        <A
          className="inline-block"
          href={url}
        >
          {label}
        </A>

        <span
          className={`
            mx-5
            text-gray-600
          `}
        >
          &raquo;
        </span>
      </React.Fragment>
    ) : (
      <span
        className="text-gray-500"
        key={`breadcrumb-${label}`}
      >
        {label}
      </span>
    ))}
  </nav>
) : null
