import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import DesktopIcon from '../icons/desktop'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import Video from '../components/video'

const cta = (
  <div
    className={`
      flex
      justify-center
    `}
  >
    <a
      className={`
        align-items-center
        bg-yellow-300
        inline-flex
        px-5
        py-3
        rounded-lg
        shadow-sm
        text-gray-900
        focus:ring
        focus:ring-yellow-600
        focus:ring-opacity-50
        visited:text-gray-900
        dark:text-gray-900
        dark:focus:bg-yellow-200
        dark:focus:ring-blue-500
        dark:visited:text-gray-900
      `}
      href="/courses"
    >
      <div
        className={`
          h-6
          mr-1
          w-6
        `}
      >
        <DesktopIcon />
      </div>

      <span
        className={`
          text-base
          font-medium
        `}
      >
        See all courses
      </span>
    </a>
  </div>
)

export default ({
  data,
}) => {
  const avatarFluid = data.author.avatar.childImageSharp.fluid

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

      <Taper>
        <div
          className="mb-24"
        >
          <h1
            className={`
              mb-6
              mt-12
              text-3xl
              xl:text-4xl
            `}
          >
            Get a better job. Learn web development skills that sell.
          </h1>

          <p>
            Level up from basic to advanced with videos on JavaScript, testing, design, and more.
          </p>

          {cta}
        </div>

        <div
          className="mb-24"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            Progress from novice to advanced to senior developer.
          </h2>

          <p>
            Start here when you want to get into web development. I will take you from your first steps to being productive with modern technologies. You will gain the skills you need to get started and learn how to continue from there.
          </p>

          <p>
            If you already know the basics of a technology, I will show you how to unlock its full potential. Together, we’ll dive into their advanced features so you can get more work done both better and faster.
          </p>
        </div>

        <div
          className="mb-1.5"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            Stop getting frustrated by complicated documentation.
          </h2>

          <p>
            Documentation often throws many unfamiliar terms at you and expects you to “get it”. Abstract explanations and examples make everything seem more complicated than it is. Programming does not have to be hard, and I am going to make it all make sense to you.
          </p>

          <p>
            Here is a sample video that shows how I walk you through a topic and explain what you need to know:
          </p>
        </div>
      </Taper>

      <div
        className="mb-24"
      >
        <Video
          youtubeId="Yzmj7-Wy95M"
        />
      </div>

      <Taper>
        <div
          className="mb-24"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            Learn how to build your ideas yourself.
          </h2>

          <p>
            Reading books and tutorials can only get you so far. You learn best from seeing someone build something, and then rebuilding it yourself. As we build projects taken from the real world together, you learn why and how they work.
          </p>

          <p>
            Following along with these courses gives you the tools you need to bring your own ideas to life. You will be able to make any change you want and adjust them to what <strong>you</strong> want to build.
          </p>
        </div>

        <div
          className="mb-24"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            Go from “changing random stuff until it works” to knowing what you are doing.
          </h2>

          <p>
            Knowing “just enough to be dangerous” is, well, dangerous. You will encounter bugs that you don’t really understand. If you fix them by throwing more code at them, those bugs will come back later. Next time, they will be a lot harder to solve.
          </p>

          <p>
            We will learn how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
          </p>
        </div>

        <div
          className="mb-24"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            Get your CV ready for the job you always wanted.
          </h2>

          <p>
            Job descriptions read like impossible checklists. They can be frustrating, whether you want to get your first development job or find a new one. You don’t have to miss out on job opportunities because you lack experience with a technology.
          </p>

          <p>
            My courses help you fix gaps in your CV with skills companies look for in their candidates. We start with the basics and get you fluent in the technologies you need to get that dream job!
          </p>
        </div>

        <div
          className="mb-24"
        >
          <h2
            className={`
              mb-3
              mt-0
              text-2xl
            `}
          >
            You learn something or you get your money back.
          </h2>

          <p>
            My only goal is for you to learn something. In case my teaching style does not work for you, I offer a 30 day money back guarantee. You get a full refund if you are unhappy with one of my courses during your first month with it, no questions asked.
          </p>

          <p>
            In case of a refund, you get to keep all materials you purchased. That way, you can try again in case you want to give it another chance later. The only thing you lose is access to any future updates I might make to the course.
          </p>
        </div>

        <div
          className={`
            bg-gray-100
            mb-6
            px-4
            py-3
            rounded-lg
            shadow
            md:flex
            md:items-start
            md:justify-between
            dark:bg-gray-900
          `}
        >
          <Img
            alt="Dom Habersack"
            className={`
              block
              flex-shrink-0
              mb-6
              mx-auto
              rounded-full
              shadow-sm
              w-32
              md:ml-0
              md:mr-5
            `}
            fluid={avatarFluid}
          />

          <div>
            <h2
              className={`
                leading-snug
                m-0
                mb-1.5
                text-lg
              `}
            >
              Hey, I am Dom. I love helping others get better at what they do.
            </h2>

            <p
              className={`
                text-sm
              `}
            >
              I started learning HTML, CSS, and JavaScript on my own in seventh grade. You could often see me scribble what I thought was valid code on paper between periods. My love for working on the web has grown ever since those early days.
            </p>

            <p
              className={`
                mb-0
                text-sm
              `}
            >
              I started my professional career in development and now consulting over 15 years ago. My heart beats for teaching everything I know. Helping others get better at what they do is what motivates me every single day.
            </p>
          </div>
        </div>

        {cta}
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    author(
      slug: {
        eq: "dom-habersack"
      }
    ) {
      avatar {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
