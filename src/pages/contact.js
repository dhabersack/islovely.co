import React from 'react'

import A from '../components/a'
import ContactForm from '../components/contact-form'
import H1 from '../components/h1'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import P from '../components/p'
import Taper from '../components/taper'

export default () => (
  <Layout
    breadcrumbs={[
      {
        label: 'Contact'
      }
    ]}
  >
    <MetaTags
      description="Get in touch if you have a project you need help with!"
      title="Contact"
    />

    <Taper>
      <H1>
        Contact
      </H1>

      <P>
        Use this form to get in touch or reach me directly at <A href="mailto:dom@islovely.co">dom@islovely.co</A>. I will get back to you as soon as I can.
      </P>

      <ContactForm />
    </Taper>
  </Layout>
)
