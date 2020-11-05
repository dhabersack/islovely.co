import React from 'react'
import { graphql } from 'gatsby'

import slugify from '../utils/slugify'
import Flash from '../components/flash'
import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import PostMeta from '../components/post-meta'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import { Figcaption, Figure, H1 } from '../styled-tags'

export default ({
  data,
  location
}) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const {
    date,
    slug,
    permalink
  } = fields

  const {
    categories,
    excerpt,
    flash,
    heroAlt,
    heroCaption,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog',
          url: '/posts'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        heroAlt={heroAlt}
        imageUrl={`/assets/rich-reviews/${slug}.jpg`}
        permalink={permalink}
        publishedAt={date}
        tags={categories}
        title={title}
        type="article"
      />

      <Taper>
        <H1>
          {title}
        </H1>

        <div
          className="margin-bottom-m"
        >
          <PostMeta
            date={date}
          />
        </div>
      </Taper>

      <Figure
        className={`
          margin-0
          margin-bottom-m
          margin-horizontal-auto
          width-full
        `}
      >
        <img
          alt={heroAlt}
          src={`/assets/heroes/${slug}.jpg`}
        />

        {heroCaption && (
          <Figcaption>
            {heroCaption}
          </Figcaption>
        )}
      </Figure>

      <Taper>
        {flash && (
          <div
            className="margin-bottom-m"
          >
            <Flash
              type="info"
            >
              {flash}
            </Flash>
          </div>
        )}

        <div
          className={`
            break-words
            margin-bottom-xl
            template--post__content
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div
          className={`
            flex
            margin-bottom-xl
          `}
        >
          <span
            className={`
              block
              color-gray-700
              font-size-12-medium
              margin-bottom-xs
              margin-right-xxs
              padding-vertical-xs
            `}
          >
            Tags:
          </span>

          <div
            className={`
              align-items-center
              flex
              flex-wrap
            `}
          >
            {categories.map(category => (
              <div
                className={`
                  margin-bottom-xxs
                  margin-right-xxs
                `}
                key={`category-${category}`}
              >
                <Tag
                  href={`/categories/${slugify(category)}`}
                >
                  {category}
                </Tag>
              </div>
            ))}
          </div>
        </div>

        <MailingListSignup
          sourceUrl={location.href}
        />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        date
        permalink
        slug
      }
      html
      frontmatter {
        categories
        excerpt
        flash
        heroAlt
        heroCaption
        title
      }
    }
  }
`
