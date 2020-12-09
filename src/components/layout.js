import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'

import Application from './application'
import Breadcrumbs from './breadcrumbs'
import Footer from './footer'
import Header from './header'
import Taper from './taper'

const IS_IN_DEBUG_MODE = false

export default ({
  breadcrumbs,
  children,
}) => (
  <MDXProvider>
    <Application>
      <Helmet
        htmlAttributes={IS_IN_DEBUG_MODE ? { 'class': 'debug' } : {}}
      />

      <div
        className={`
          container
          flex
          flex-col
          min-h-screen
          mx-auto
          px-4
        `}
      >
        <div
          className="mb-6"
        >
          <Header />
        </div>

        <Taper>
          <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
        </Taper>

        <main
          className={`
            flex-grow
            mb-24
          `}
        >
          {children}
        </main>

        <Footer />
      </div>
    </Application>
  </MDXProvider>
)
