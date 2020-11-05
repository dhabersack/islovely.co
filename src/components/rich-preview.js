import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({
  description,
  expiredAt,
  heroAlt,
  imageUrl = '/assets/rich-previews/islovely.jpg',
  permalink,
  publishedAt,
  tags,
  title,
  type,
  updatedAt,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const {
    title: siteTitle,
    siteUrl
  } = data.site.siteMetadata

  const isArticle = type === 'article'

  return (
    <Helmet>
      {description && (
        <meta
          content={description}
          property="og:description"
        />
      )}

      <meta
        content={`${siteUrl}${imageUrl}`}
        property="og:image"
      />

      {heroAlt && (
        <meta
          content={heroAlt}
          property="og:image:alt"
        />
      )}

      <meta
        content="360"
        property="og:image:height"
      />

      <meta
        content="image/jpeg"
        property="og:image:type"
      />

      <meta
        content="640"
        property="og:image:width"
      />

      <meta
        content={siteTitle}
        property="og:site_name"
      />

      <meta
        content={title ? `${title} · ${siteTitle}` : siteTitle}
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

      {isArticle && tags.map(tag => (
        <meta
          content={tag}
          key={`tag-${tag}`}
          property="article:tag"
        />
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
    </Helmet>
  )
}
