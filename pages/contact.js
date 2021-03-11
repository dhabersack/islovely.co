import React from 'react'

import ContactForm from '@/components/contact-form'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'

export default function Contact() {
  const breadcrumbs = [
    {
      label: 'Contact'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="Get in touch if you have a project you need help with!"
        title="Contact"
      />

      <RichPreview
        description="Get in touch if you have a project you need help with!"
        imageSubpath="pages/contact"
        permalink="/contact"
        title="Contact"
      />

      <h1>
        Contact
      </h1>

      <p>
        Use this form to get in touch or reach me directly at <a href="mailto:dom@islovely.co">dom@islovely.co</a>. I will get back to you as soon as I can.
      </p>

      <ContactForm />
    </Layout>
  )
}
