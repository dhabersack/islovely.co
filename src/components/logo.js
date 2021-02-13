import React from 'react'

import getLogoForName from '../utils/get-logo-for-name'

export default function Logo({
  name,
}) {
  const {
    dark,
    light,
    regular,
  } = getLogoForName(name)

  return (
    <React.Fragment>
      {regular && (
        <img
          alt={name}
          src={regular}
          title={name}
        />
      )}

      {light && (
        <img
          alt={name}
          className="hidden dark:block"
          src={light}
          title={name}
        />
      )}

      {dark && (
        <img
          alt={name}
          className="block dark:hidden"
          src={dark}
          title={name}
        />
      )}
    </React.Fragment>
  )
}
