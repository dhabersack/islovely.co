import React from 'react'

import A from './a'

export default ({
  breadcrumbs,
}) => breadcrumbs ? (
  <nav
    className={`
      font-size-14-medium
      font-weight-500
      margin-bottom-m
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
            color-gray-600
            margin-horizontal-xxs
          `}
        >
          &raquo;
        </span>
      </React.Fragment>
    ) : (
      <span
        className="color-gray-500"
        key={`breadcrumb-${label}`}
      >
        {label}
      </span>
    ))}
  </nav>
) : null
