import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import slugify from '@/lib/slugify'

const FIRETIPS_DIRECTORY_PATH = path.join(process.cwd(), '_firetips')

export async function getAllFiretips() {
  const files = fs.readdirSync(FIRETIPS_DIRECTORY_PATH).filter(filename => !filename.startsWith('.'))

  return (await Promise.all(files.map(async filename => {
    const [, date, slug] = filename.match(/^(\d+-\d+-\d+)-(.*).md$/)

    const file = fs.readFileSync(path.join(FIRETIPS_DIRECTORY_PATH, filename), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    return {
      ...data,
      content,
      date,
      permalink: `/firetips/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFiretipsByTag(tag) {
  const allFiretips = await getAllFiretips()

  return allFiretips.filter(firetip => firetip.tags.map(slugify).includes(tag))
}

export async function getFiretipBySlug(slug) {
  const allFiretips = await getAllFiretips()

  return allFiretips.find(firetip => firetip.slug === slug)
}
