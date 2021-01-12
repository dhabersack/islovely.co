import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'

import Application from './application'
import Banner from './banner'
import Breadcrumbs from './breadcrumbs'
import BreakpointDebug from './breakpoint-debug'
import Footer from './footer'
import Header from './header'
import Taper from './taper'

const IS_IN_DEBUG_MODE = true

export default ({
  breadcrumbs,
  children,
}) => (
  <MDXProvider>
    <Application>
      <Helmet />

      <Banner />

      <div className="flex flex-col min-h-screen">
        <div className="container mb-6 mx-auto px-4">
          <Header />
        </div>

        <main className="container flex-grow mb-24 mx-auto px-4">
          <Taper>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </Taper>

          {children}
        </main>

        <div className="bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <Footer />
          </div>
        </div>
      </div>

      {IS_IN_DEBUG_MODE && (
        <BreakpointDebug />
      )}
    </Application>
  </MDXProvider>
)
