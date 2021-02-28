import React from 'react'
import Head from 'next/head'

export default function MetaTags({
  description,
  title,
}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const siteTitle = data.site.siteMetadata.title
  const siteTitle = 'islovely'

  return (
    <Head>
      {description && (
        <meta
          name="description"
          content={description}
        />
      )}

      {title ? (
        <title>{title} · {siteTitle}</title>
      ) : (
        <title>{siteTitle}</title>
      )}
    </Head>
  )
}
