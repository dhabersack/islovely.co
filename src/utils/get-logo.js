import Airtable from '../logos/airtable.svg'
import ConvertKit from '../logos/convertkit.svg'
import DigitalOcean from '../logos/digitalocean.svg'
import Figma from '../logos/figma.svg'
import Gatsby from '../logos/gatsby.svg'
import Gumroad from '../logos/gumroad.svg'
import Netlify from '../logos/netlify.svg'
import Next from '../logos/next.svg'
import React from '../logos/react.svg'
import Sketch from '../logos/sketch.svg'
import Tailwind from '../logos/tailwind-css.svg'

const LOGOS = {
  'Airtable': Airtable,
  'ConvertKit': ConvertKit,
  'DigitalOcean': DigitalOcean,
  'Figma': Figma,
  'Gatsby': Gatsby,
  'Gumroad': Gumroad,
  'Netlify': Netlify,
  'Next': Next,
  'React.js': React,
  'Sketch': Sketch,
  'Tailwind CSS': Tailwind,
}

export default function getLogo(name) {
  return LOGOS[name]
}
