import Airtable from '../logos/airtable.svg'
import Contentful from '../logos/contentful.svg'
import ConvertKit from '../logos/convertkit.svg'
import DigitalOcean from '../logos/digitalocean.svg'
import Figma from '../logos/figma.svg'
import GatsbyDark from '../logos/gatsby--dark.svg'
import GatsbyLight from '../logos/gatsby--light.svg'
import Gumroad from '../logos/gumroad.svg'
import JavaScript from '../logos/javascript.svg'
import Jest from '../logos/jest.svg'
import Netlify from '../logos/netlify.svg'
import NextDark from '../logos/next--dark.svg'
import NextLight from '../logos/next--light.svg'
import NotionDark from '../logos/notion--dark.svg'
import NotionLight from '../logos/notion--light.svg'
import React from '../logos/react.svg'
import Sketch from '../logos/sketch.svg'
import Tailwind from '../logos/tailwind-css.svg'
import VercelDark from '../logos/vercel--dark.svg'
import VercelLight from '../logos/vercel--light.svg'

const LOGOS = {
  'Airtable': {
    regular: Airtable,
  },
  'Contentful': {
    regular: Contentful,
  },
  'ConvertKit': {
    regular: ConvertKit,
  },
  'DigitalOcean': {
    regular: DigitalOcean,
  },
  'Figma': {
    regular: Figma,
  },
  'Gatsby': {
    dark: GatsbyDark,
    light: GatsbyLight,
  },
  'Gumroad': {
    regular: Gumroad,
  },
  'JavaScript': {
    regular: JavaScript,
  },
  'Jest': {
    regular: Jest,
  },
  'Netlify': {
    regular: Netlify,
  },
  'Next.js': {
    dark: NextDark,
    light: NextLight,
  },
  'Notion': {
    dark: NotionDark,
    light: NotionLight,
  },
  'React.js': {
    regular: React,
  },
  'Sketch': {
    regular: Sketch,
  },
  'Tailwind CSS': {
    regular: Tailwind,
  },
  'Vercel': {
    dark: VercelDark,
    light: VercelLight,
  },
}

export default function getLogo(name) {
  return LOGOS[name]
}
