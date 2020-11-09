import React from 'react'
import { Helmet } from 'react-helmet'
import { MDXProvider } from '@mdx-js/react'

import A from './a'
import Application from './application'
import Blockquote from './blockquote'
import Breadcrumbs from './breadcrumbs'
import Code from './code'
import Del from './del'
import Em from './em'
import Footer from './footer'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import H5 from './h5'
import H6 from './h6'
import Hr from './hr'
import Header from './header'
import Img from './img'
import Li from './li'
import Ol from './ol'
import P from './p'
import Pre from './pre'
import Strong from './strong'
import Table from './table'
import Taper from './taper'
import Td from './td'
import Th from './th'
import Tr from './tr'
import Ul from './ul'

const IS_IN_DEBUG_MODE = false

const MDX_COMPONENT_MAPPING = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  delete: Del,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  img: Img,
  li: Li,
  ol: Ol,
  p: P,
  pre: Pre,
  strong: Strong,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  thematicBreak: Hr,
  ul: Ul,
}

export default ({
  breadcrumbs,
  children,
}) => (
  <MDXProvider
    components={MDX_COMPONENT_MAPPING}
  >
    <Application>
      <Helmet
        htmlAttributes={IS_IN_DEBUG_MODE ? { 'class': 'debug' } : {}}
      />

      <div
        className={`
          flex
          flex-column
          h-full
        `}
      >
        <div
          className={`
            flex-noshrink
            mx-20
          `}
        >
          <Header />
        </div>

        <main
          className={`
            l-default__main
            flex-grow
            flex-no-shrink
            pb-60
            pt-48
            px-span
          `}
        >
          <Taper>
            <Breadcrumbs
              breadcrumbs={breadcrumbs}
            />
          </Taper>

          {children}
        </main>

        <div
          className={`
            bg-gray-100
            flex-none
            px-span
          `}
        >
          <Footer />
        </div>
      </div>
    </Application>
  </MDXProvider>
)
