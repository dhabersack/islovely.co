import React from 'react'

import Card from './card'

export default function ProjectTeaser({
  name,
  revenue,
  url,
}) {
  return (
    <Card>
      <div className="p-4">
        {name}
      </div>

      <footer className="bg-gray-100 p-4">
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
