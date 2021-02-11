import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'

import Application from './application'
import Banner from './banner'
import Breadcrumbs from './breadcrumbs'
import Breakout from './breakout'
import BreakpointDebug from './breakpoint-debug'
import Container from './container'
import Footer from './footer'
import Header from './header'

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
        <div className="mb-6">
          <Container>
            <Breakout>
              <Header />
            </Breakout>
          </Container>
        </div>

        <main className="flex-grow mb-24">
          <Container>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            {children}
          </Container>
        </main>

        <div className="bg-gray-100 dark:bg-gray-900">
          <Container>
            <Breakout>
              <Footer />
            </Breakout>
          </Container>
        </div>
      </div>

      {IS_IN_DEBUG_MODE && (
        <BreakpointDebug />
      )}
    </Application>
  </MDXProvider>
)
