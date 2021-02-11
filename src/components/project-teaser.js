import React from 'react'

import Card from './card'

export default function ProjectTeaser({
  name,
  revenue,
  url,
}) {
  return (
    <Card>
      <div className="px-4 py-3">
        {name}
      </div>

      <footer className="bg-gray-100 px-4 py-3">
        <div>
          Revenue: {revenue}
        </div>

        <div>
          URL: {url}
        </div>
      </footer>
    </Card>
  )
}
