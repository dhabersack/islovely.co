import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer} from 'gatsby-plugin-mdx'

import Figure from '../components/figure'
import H1 from '../components/h1'
import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import PostMeta from '../components/post-meta'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import Taper from '../components/taper'
import slugify from '../utils/slugify'

export default ({
  data,
  location,
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = data.mdx

  const {
    date,
    slug,
    permalink,
  } = fields

  const {
    categories,
    excerpt,
    heroAlt,
    heroCaption,
    title,
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
        imageSubpath={`posts/${slug}`}
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
          className="mb-24"
        >
          <PostMeta
            date={date}
          />
        </div>
      </Taper>

      <Figure
        alt={heroAlt}
        caption={heroCaption}
        className={`
          m-0
          mb-24
        `}
        src={`/assets/heroes/${slug}.jpg`}
      />

      <Taper>
        <div
          className={`
            break-words
            mb-60
          `}
        >
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>

        <div
          className={`
            flex
            flex-wrap
            mb-60
          `}
        >
          {categories.map(category => (
            <div
              className={`
                mb-3
                mr-5
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

        <MailingListSignup
          sourceUrl={location.href}
        />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      body
      fields {
        date
        permalink
        slug
      }
      frontmatter {
        categories
        excerpt
        heroAlt
        heroCaption
        title
      }
    }
  }
`
