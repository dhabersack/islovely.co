import React from 'react'

import A from '../components/a'
import H1 from '../components/h1'
import H2 from '../components/h2'
import Img from '../components/img'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import P from '../components/p'
import RichPreview from '../components/rich-preview'
import Strong from '../components/strong'
import Video from '../components/video'

const cta = (
  <A
    className={`
      align-items-center
      bg-yellow-400
      inline-flex
      px-25
      py-12
      rounded-24
      shadow-xs
      text-gray-900
      visited:text-gray-900
    `}
    href="/courses/"
  >
    <Img
      alt=""
      className="mr-5"
      src="/assets/icons/desktop.svg"
    />

    <span
      className={`
        font-size-16
        font-weight-500
      `}
    >
      See all courses
    </span>
  </A>
)

export default () => (
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

    <div
      className={`
        mb-96
      `}
    >
      <H1
        className={`
          font-size-30-short
          m-0
          mb-12
          xl:font-size-36-medium
        `}
      >
        Get a better job. Learn web development skills that sell.
      </H1>

      <P>
        Level up from basic to advanced with videos on JavaScript, testing, design, and more.
      </P>

      {cta}
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        Progress from novice to advanced to senior developer.
      </H2>

      <P>
        Start here when you want to get into web development. I will take you from your first steps to being productive with modern technologies. You will gain the skills you need to get started and learn how to continue from there.
      </P>

      <P>
        If you already know the basics of a technology, I will show you how to unlock its full potential. Together, we’ll dive into their advanced features so you can get more work done both better and faster.
      </P>
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        Stop getting frustrated by complicated documentation.
      </H2>

      <P>
        Documentation often throws many unfamiliar terms at you and expects you to “get it”. Abstract explanations and examples make everything seem more complicated than it is. Programming does not have to be hard, and I am going to make it all make sense to you.
      </P>

      <P>
        Here is a sample video that shows how I walk you through a topic and explain what you need to know:
      </P>

      <div
        className="mb-24"
      >
        <Video
          youtubeId="Yzmj7-Wy95M"
        />
      </div>
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        Learn how to build your ideas yourself.
      </H2>

      <P>
        Reading books and tutorials can only get you so far. You learn best from seeing someone build something, and then rebuilding it yourself. As we build projects taken from the real world together, you learn why and how they work.
      </P>

      <P>
        Following along with these courses gives you the tools you need to bring your own ideas to life. You will be able to make any change you want and adjust them to what <Strong>you</Strong> want to build.
      </P>
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        Go from “changing random stuff until it works” to knowing what you are doing.
      </H2>

      <P>
        Knowing “just enough to be dangerous” is, well, dangerous. You will encounter bugs that you don’t really understand. If you fix them by throwing more code at them, those bugs will come back later. Next time, they will be a lot harder to solve.
      </P>

      <P>
        We will learn how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
      </P>
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        Get your CV ready for the job you always wanted.
      </H2>

      <P>
        Job descriptions read like impossible checklists. They can be frustrating, whether you want to get your first development job or find a new one. You don’t have to miss out on job opportunities because you lack experience with a technology.
      </P>

      <P>
        My courses help you fix gaps in your CV with skills companies look for in their candidates. We start with the basics and get you fluent in the technologies you need to get that dream job!
      </P>
    </div>

    <div
      className="mb-96"
    >
      <H2
        className={`
          font-size-24-medium
          mb-12
          mt-0
        `}
      >
        You learn something or you get your money back.
      </H2>

      <P>
        My only goal is for you to learn something. In case my teaching style does not work for you, I offer a 30 day money back guarantee. You get a full refund if you are unhappy with one of my courses during your first month with it, no questions asked.
      </P>

      <P>
        In case of a refund, you get to keep all materials you purchased. That way, you can try again in case you want to give it another chance later. The only thing you lose is access to any future updates I might make to the course.
      </P>
    </div>

    <div
      className={`
        bg-gray-200
        rounded-6
        mb-24
        px-15
        py-24
        m:align-items-start
        m:flex
        m:justify-between
      `}
    >
      <Img
        alt="Dom Habersack"
        className={`
          block
          mb-24
          mx-auto
          rounded-round
          shadow-s
          w-120
          m:ml-0
          m:mr-15
        `}
        src="/assets/dom.jpg"
      />

      <div>
        <H2
          className={`
            font-size-18-medium
            mt-0
            l:font-size-20-medium
          `}
        >
          Hey, I am Dom. I love helping others get better at what they do.
        </H2>

        <P
          className={`
            font-size-14-medium
            l:font-size-16-medium
          `}
        >
          I started learning HTML, CSS, and JavaScript on my own in seventh grade. You could often see me scribble what I thought was valid code on paper between periods. My love for working on the web has grown ever since those early days.
        </P>

        <P
          className={`
            font-size-14-medium
            l:font-size-16-medium
            mb-0
          `}
        >
          I started my professional career in development and now consulting over 15 years ago. My heart beats for teaching everything I know. Helping others get better at what they do is what motivates me every single day.
        </P>
      </div>
    </div>

    {cta}
  </Layout>
)
