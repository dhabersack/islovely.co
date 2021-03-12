import React from 'react'
import Head from 'next/head'

export default function RichPreview({
  description,
  expiredAt,
  heroAlt,
  imageSubpath = 'default',
  permalink,
  publishedAt,
  tags,
  title,
  type,
  updatedAt,
}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         siteUrl
  //         title
  //       }
  //     }
  //   }
  // `)
  //
  // const {
  //   title: siteTitle,
  //   siteUrl,
  // } = data.site.siteMetadata

  const siteTitle = 'islovely'
  const siteUrl = 'https://islovely.co'

  const isArticle = type === 'article'

  return (
    <Head>
      {description && (
        <meta
          content={description}
          property="og:description"
        />
      )}

      <meta
        content={`${siteUrl}/assets/rich-previews/${imageSubpath}.jpg`}
        property="og:image"
      />

      {heroAlt && (
        <meta
          property="og:image:alt"
          content={heroAlt}
        />
      )}

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:height" content="314" />
      <meta property="og:image:width" content="600" />

      <meta
        content={siteTitle}
        property="og:site_name"
      />

      <meta
        content={title ?? siteTitle}
        property="og:title"
      />

      {type && (
        <meta
          content={type}
          property="og:type"
        />
      )}

      {(isArticle && expiredAt) && (
        <meta
          content={expiredAt}
          property="article:expiration_time"
        />
      )}

      {(isArticle && updatedAt) && (
        <meta
          content={updatedAt}
          property="article:modified_time"
        />
      )}

      {(isArticle && publishedAt) && (
        <meta
          content={publishedAt}
          property="article:published_time"
        />
      )}

      {isArticle && tags?.map(tag => (
        <React.Fragment key={`tag-${tag.slug}`}>
          <meta
            content={tag.title}
            property="article:tag"
          />
        </React.Fragment>
      ))}

      <meta
        content={`${siteUrl}${permalink}`}
        property="og:url"
      />

      <meta
        content="summary_large_image"
        name="twitter:card"
      />

      <meta
        content="@domhabersack"
        name="twitter:creator"
      />
    </Head>
  )
}
