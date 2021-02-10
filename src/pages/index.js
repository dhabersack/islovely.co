import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import BuildInPublic from '../components/build-in-public'
import Card from '../components/card'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import NewsletterSignup from '../components/newsletter-signup'
import NewsletterTeaser from '../components/newsletter-teaser'
import RichPreview from '../components/rich-preview'

export default ({
  data,
}) => {
  const avatarFluid = data.author.avatar.childImageSharp.fluid
  const newsletters = data.allNewsletter.edges.map(({ node }) => node)

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
        <div>
          <div className="flex items-center mb-4 space-x-5">
            <Img
              alt="Dom Habersack"
              className="block flex-shrink-0 h-20 rounded-full w-20"
              fluid={avatarFluid}
              height="80"
              width="80"
            />

            <div>
              <p className="block font-bold mb-0.5 text-sm text-gray-700 uppercase dark:text-gray-300">
                Hi, I am Dom.
              </p>

              <h1 className="flex-grow m-0 text-3xl text-gray-800 dark:text-gray-200">
                Follow along as I <span className="text-blue-600 dark:text-red-500">build my company in public</span>.
              </h1>
            </div>
          </div>

          <p className="mb-6">
            I left my job as an IT consultant to pursue my passion. Newly independent, I am learning how to make money online. You can follow my journey as I build projects in public.
          </p>

          <div>
            <Card>
              <div className="bg-gray-100 p-4 dark:bg-gray-900">
                <NewsletterSignup />
              </div>
            </Card>
          </div>
        </div>

        <BuildInPublic />

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
