import React from 'react'

import Logo from './logo'

const STACK = [
  'JavaScript',
  'React.js',
  'Next.js',
  'Gatsby',
  'Jest',
  'Tailwind CSS',
  'Sketch',
  'Figma',
  'Airtable',
  'Contentful',
  'Netlify',
  'Vercel',
  'DigitalOcean',
  'ConvertKit',
  'Gumroad',
  'Notion'
]

export default function MyStack() {
  return (
    <div className="flex flex-wrap justify-center">
      {STACK.map(tool => (
        <React.Fragment key={`tool-${tool}`}>
          <div className="h-9 m-2 w-9">
            <Logo name={tool} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
