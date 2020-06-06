import React from 'react'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import LandingPageBlock from '../components/landing-page-block'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Video from '../components/video'

const cta = (
  <a className="align-items-center background-color-yellow-400 border-radius-xl box-shadow-xs color-gray-900 inline-flex padding-horizontal-l padding-vertical-s visited:color-gray-900" href="/courses">
    <img alt="" className="margin-right-xxs" src="/assets/icons/desktop.svg" />

    <span className="font-size-16 font-weight-500">
      See all courses
    </span>
  </a>
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

    <div className="align-items-center flex flex-column-reverse justify-between margin-bottom-xxl s:flex-row">
      <div className="s:columns-8 m:columns-7">
        <h1 className="font-size-30-short margin-0 margin-bottom-s xl:font-size-36-medium">
          Get a better job. Learn web development skills that sell.
        </h1>

        <p className="margin-bottom-s">
          Level up from basic to advanced with videos on JavaScript, testing, design, and more.
        </p>

        {cta}
      </div>

      <div className="columns-8 margin-bottom-s xs:columns-6 s:columns-4 m:columns-5">
        <img alt="" src="/assets/flame/flame-welcome.png" />
      </div>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Progress from novice to advanced to senior developer." imageUrl="/assets/flame/flame-page-under-construction.png">
        <p>
          Start here when you want to get into web development. I will take you from your first steps to being productive with modern technologies. You will gain the skills you need to get started and learn how to continue from there.
        </p>

        <p>
          If you already know the basics of a technology, I will show you how to unlock its full potential. Together, we’ll dive into their advanced features so you can get more work done both better and faster.
        </p>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Stop getting frustrated by complicated documentation." imageUrl="/assets/flame/flame-books.png">
        <p>
          Documentation often throws many unfamiliar terms at you and expects you to “get it”. Abstract explanations and examples make everything seem more complicated than it is. Programming does not have to be hard, and I am going to make it all make sense to you.
        </p>

        <p>
          Here is a sample from one of my courses that shows how I will walk you through what you need to know:
        </p>

        <div className="margin-bottom-m">
          <Video vimeoId="372044005" />
        </div>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Learn how to build your ideas yourself." imageUrl="/assets/flame/flame-design-science.png">
        <p>
          Reading books and tutorials can only get you so far. You learn best from seeing someone build something, and then rebuilding it yourself. As we build projects taken from the real world together, you learn why and how they work.
        </p>

        <p>
          Following along with these courses gives you the tools you need to bring your own ideas to life. You will be able to make any change you want and adjust them to what <strong>you</strong> want to build.
        </p>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Go from “changing random stuff until it works” to knowing what you are doing." imageUrl="/assets/flame/flame-no-connection.png">
        <p>
          Knowing “just enough to be dangerous” is, well, dangerous. You will encounter bugs that you don’t really understand. If you fix them by throwing more code at them, those bugs will come back later. Next time, they will be a lot harder to solve.
        </p>

        <p>
          We will learn how to find the causes of different problems and learn to solve them methodically. This gives you the skills necessary to tackle any unforeseen challenges with ease. Those bugs won’t know what hit them!
        </p>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="Get your CV ready for the job you always wanted." imageUrl="/assets/flame/flame-upgrade.png">
        <p>
          Job descriptions read like impossible checklists. They can be frustrating, whether you want to get your first development job or find a new one. You don’t have to miss out on job opportunities because you lack experience with a technology.
        </p>

        <p>
          My courses help you fix gaps in your CV with skills companies look for in their candidates. We start with the basics and get you fluent in the technologies you need to get that dream job!
        </p>
      </LandingPageBlock>
    </div>

    <div className="margin-bottom-xxl">
      <LandingPageBlock heading="You learn something or you get your money back." imageUrl="/assets/flame/flame-8.png">
        <p>
          My only goal is for you to learn something. In case my teaching style does not work for you, I offer a 30 day money back guarantee. You get a full refund if you are unhappy with one of my courses during your first month with it, no questions asked.
        </p>

        <p>
          In case of a refund, you get to keep all materials you purchased. That way, you can try again in case you want to give it another chance later. The only thing you lose is access to any future updates I might make to the course.
        </p>
      </LandingPageBlock>
    </div>

    <div className="background-color-gray-200 border-radius-xs margin-bottom-m padding-horizontal-s padding-vertical-m xs:padding-vertical-m m:align-items-start m:flex m:justify-between">
      <img alt="Dom Habersack" className="block border-radius-round box-shadow-s margin-bottom-m margin-horizontal-auto width-120 m:margin-left-0 m:margin-right-s" src="/assets/dom.jpg" />

      <div>
        <h2 className="font-size-18-medium margin-top-0 l:font-size-20-medium">
          <Emoji name=":wave:" />

          Hey, I am Dom. I love helping others get better at what they do.
        </h2>

        <p className="font-size-14-medium l:font-size-16-medium">
          I started learning HTML, CSS, and JavaScript on my own in seventh grade. You could often see me scribble what I thought was valid code on paper between periods. My love for working on the web has grown ever since those early days.
        </p>

        <p className="font-size-14-medium l:font-size-16-medium margin-bottom-0">
          I started my professional career in development and now consulting over 15 years ago. My heart beats for teaching everything I know. Helping others get better at what they do is what motivates me every single day.
        </p>
      </div>
    </div>

    {cta}
  </Layout>
)
