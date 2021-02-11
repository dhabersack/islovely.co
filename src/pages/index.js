import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Breakout from '../components/breakout'
import BuildInPublic from '../components/build-in-public'
import Card from '../components/card'
import Layout from '../components/layout'
import LinkedIn from '../icons/linkedin-logo'
import MetaTags from '../components/meta-tags'
import NewsletterSignup from '../components/newsletter-signup'
import NewsletterTeaser from '../components/newsletter-teaser'
import PostTeasers from '../components/post-teasers'
import RichPreview from '../components/rich-preview'
import Twitter from '../icons/twitter-logo'
import YouTube from '../icons/youtube-logo'

const SOCIAL_PROFILES = {
  'Twitter': {
    href: 'https://twitter.com/domhabersack',
    Logo: Twitter,
  },
  'YouTube': {
    href: 'https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw',
    Logo: YouTube,
  },
  'LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    Logo: LinkedIn,
  },
}

export default function Index({
  data,
}) {
  const avatarFluid = data.author.avatar.childImageSharp.fluid
  const newsletters = data.allNewsletter.edges.map(({ node }) => node)
  const posts = data.allPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <MetaTags
        description="Level up from basic to advanced with videos on JavaScript, testing, design, and more."
        title="Get a better job. Learn web development skills that sell."
      />

      <RichPreview
        description="Level up from basic to advanced with videos on JavaScript, testing, design, and more."
        permalink=""
        title="Get a better job. Learn web development skills that sell."
      />

      <div className="space-y-24">
        <div className="space-y-8">
          <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Img
              alt="Dom Habersack"
              className="block flex-shrink-0 h-56 rounded-full w-56"
              fluid={avatarFluid}
              height="224"
              width="224"
            />

            <div>
              <h1 className="flex-grow m-0 mb-2 text-3xl">
                Hi, I am Dom!
              </h1>

              <p>
                I am a software developer, IT consultant, and content creator with 15+ years of professional experience. I am currently learning how to make money online. Follow along as I build my company in public.
              </p>

              <div className="flex space-x-2.5">
                {Object.entries(SOCIAL_PROFILES).map(([name, {
                  href,
                  Logo
                }]) => (
                  <React.Fragment key={name}>
                    <a
                      className="block h-6 w-6 text-gray-600 dark:text-gray-300"
                      href={href}
                      title={`Dom Habersack on ${name}`}
                    >
                      <Logo />
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card>
              <div className="bg-gray-100 px-4 py-3 dark:bg-gray-900">
                <NewsletterSignup />
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2>
            Latest newsletter issues
          </h2>

          <div className="grid gap-10 grid-cols-1 mb-8">
            {newsletters.map(newsletter => (
              <NewsletterTeaser
                key={`newsletter-${newsletter.id}`}
                newsletter={newsletter}
              />
            ))}
          </div>

          <p>
            <a href="/newsletter/archive">
              Read all issues &rarr;
            </a>
          </p>
        </div>

        <div>
          <h2>
            Latest blog posts
          </h2>

          <div className="mb-8">
            <Breakout>
              <PostTeasers posts={posts} />
            </Breakout>
          </div>

          <p>
            <a href="/posts">
              Read all posts &rarr;
            </a>
          </p>
        </div>

        <BuildInPublic />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allNewsletter(
      limit: 5,
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          date
          frontmatter {
            excerpt
            issue
            title
          }
          id
          permalink
        }
      }
    }
    allPost(
      limit: 6,
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          date
          frontmatter {
            author {
              avatar {
                childImageSharp {
                  fluid(maxWidth: 40) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              frontmatter {
                name
              }
            }
            categories
            excerpt
            heroAlt
            title
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          id
          permalink
        }
      }
    }
    author(
      slug: {
        eq: "dom-habersack"
      }
    ) {
      avatar {
        childImageSharp {
          fluid(maxWidth: 160) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
