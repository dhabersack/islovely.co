import React from 'react'

import getLogo from '../utils/get-logo'

export default function Stack({
  stack,
}) {
  return (
    <div className="flex flex-wrap space-x-2.5">
      {stack.map(tool => (
        <React.Fragment key={`tool-${tool}`}>
          <img
            alt={tool}
            className="h-6 w-6"
            src={getLogo(tool)}
          />
        </React.Fragment>
      ))}
    </div>
  )
}
