import React from 'react'

import Container from './container'
import Sparkles from '../icons/sparkles'

export default () => (
  <div className="bg-yellow-300 py-3">
    <Container>
      <div className="flex flex-wrap font-medium items-center justify-center space-x-2.5 text-gray-900">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-6 mr-1 text-gray-800 w-6">
            <Sparkles />
          </div>

          <p className="m-0 text-sm">
            Get 200+ icons, free for personal use: <a href="https://lovelicons.com">lovelicons.com</a>
          </p>
        </div>
      </div>
    </Container>
  </div>
)
