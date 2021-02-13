import React from 'react'

import getLogo from '../utils/get-logo'

const STACK = [
  'Tailwind CSS',
  'Next',
  'Gatsby',
  'React.js',
  'Sketch',
  'Figma',
  'Airtable',
  'ConvertKit',
  'Netlify',
  'DigitalOcean',
  'Gumroad'
]

export default function MyStack() {
  return (
    <div className="flex flex-wrap justify-center">
      {STACK.map(tool => (
        <React.Fragment key={`tool-${tool}`}>
          <img
            alt={tool}
            className="h-9 m-3 w-9"
            src={getLogo(tool)}
          />
        </React.Fragment>
      ))}
    </div>
  )
}
