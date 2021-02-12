import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Card from '../components/card'
import Email from '../icons/email'
import Layout from '../components/layout'
import LinkedIn from '../icons/linkedin-logo'
import MetaTags from '../components/meta-tags'
import Metrics from '../components/metrics'
import NewsletterSignup from '../components/newsletter-signup'
import NewsletterTeaser from '../components/newsletter-teaser'
import PostTeaser from '../components/post-teaser'
import ProjectTeaser from '../components/project-teaser'
import RichPreview from '../components/rich-preview'
import Twitter from '../icons/twitter-logo'
import YouTube from '../icons/youtube-logo'

const METRICS_AUDIENCE = [
  {
    label: 'Twitter followers',
    value: 910,
    change: +212,
  }, {
    label: 'Newsletter subscribers',
    value: 16,
    change: +4,
  }, {
    label: 'YouTube subscribers',
    value: 47,
    change: +8,
  },
]

const METRICS_FINANCES = [
  {
    label: 'US$ revenue',
    value: 0,
    change: +0,
  }, {
    label: 'US$ MRR',
    value: 0,
    change: +0,
  },
]

const METRICS_CONTENT = [
  {
    label: 'Blog posts',
    value: 26,
    change: +0
  }, {
    label: 'Weekly newsletters',
    value: 74,
    change: +4
  }, {
    label: 'Videos published',
    value: 5,
    change: +0
  },
]

const SOCIAL_PROFILES = {
  '@domhabersack on Twitter': {
    href: 'https://twitter.com/domhabersack',
    Logo: Twitter,
  },
  'Dom Habersack on YouTube': {
    href: 'https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw',
    Logo: YouTube,
  },
  'Dom Habersack on LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    Logo: LinkedIn,
  },
  'dom@islovely.co': {
    href: 'mailto:dom@islovely.co',
    Logo: Email,
  },
}

export default function Index({
  data,
}) {
  const avatarFluid = data.author.avatar.childImageSharp.fluid
  const featuredProject = data.project
  const newsletters = data.allNewsletter.edges.map(({ node }) => node)
  const posts = data.allPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <MetaTags
        description="I am a software developer, IT consultant, and content creator with 15+ years of professional experience. Follow along as I build my company in public."
        title="Dom Habersack · Content Creator & IndieHacker"
      />

      <RichPreview
        description="I am a software developer, IT consultant, and content creator with 15+ years of professional experience. Follow along as I build my company in public."
        permalink=""
        title="Dom Habersack · Content Creator & IndieHacker"
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
                I am a software developer, content creator, and IndieHacker with over 15 years of professional experience. I am currently learning how to make money online. Follow along as I build my company in public.
              </p>

              <div className="flex space-x-2.5">
                {Object.entries(SOCIAL_PROFILES).map(([title, {
                  href,
                  Logo
                }]) => (
                  <React.Fragment key={title}>
                    <a
                      className="block h-6 w-6 text-gray-600 dark:text-gray-300"
                      href={href}
                      title={title}
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
            Featured project
          </h2>

          <p>
            As my first attempt to sell something online, I am turning some of my icons into a product. Many of them will be free for personal use. Commercial use will require a paid license, which also unlocks additional features.
          </p>

          <div className="mb-8">
            <ProjectTeaser project={featuredProject} />
          </div>

          <p>
            <a href="/projects">
              See all projects &rarr;
            </a>
          </p>
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

          <div className="grid gap-8 grid-cols-1 mb-8 sm:gap-4 sm:grid-cols-2">
            {posts.map(post => (
              <React.Fragment key={`post-teaser-${post.id}`}>
                <PostTeaser post={post} />
              </React.Fragment>
            ))}
          </div>

          <p>
            <a href="/posts">
              Read all posts &rarr;
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-0.5">
            Metrics (last 28 days)
          </h2>

          <p className="italic m-0 mb-3 text-gray-500 text-xs dark:text-gray-400 lg:mb-6">
            Updated: February 11, 2021
          </p>

          <p>
            As part of building in public, I share my numbers openly. If there’s anything else you’d like me to include here, tweet me at <a href="https://twitter.com/domhabersack">@domhabersack</a>.
          </p>

          <Card>
            <div className="divide-y dark:divide-gray-700">
              <div className="p-4">
                <Metrics
                  label="Finances"
                  metrics={METRICS_FINANCES}
                />
              </div>

              <div className="p-4">
                <Metrics
                  label="Content"
                  metrics={METRICS_CONTENT}
                />
              </div>

              <div className="p-4">
                <Metrics
                  label="Audience"
                  metrics={METRICS_AUDIENCE}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allNewsletter(
      limit: 4,
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
      limit: 4,
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
    project(
      slug: {
        eq: "lovelicons"
      }
    ) {
      frontmatter {
        excerpt
        heroAlt
        title
        revenue
        url
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
`
