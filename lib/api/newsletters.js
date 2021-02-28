import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAuthor } from './authors'

const buildFindBySlug = allItems => slug => allItems.find(item => item.slug === slug)
const get = attribute => item => item[attribute]

const NEWSLETTERS_DIRECTORY_PATH = path.join(process.cwd(), '_newsletters')

export async function getAllNewsletters() {
  const directories = fs.readdirSync(NEWSLETTERS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name
  }) => {
    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const file = fs.readFileSync(path.join(NEWSLETTERS_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const html = content

    return {
      ...data,
      author: await getAuthor(data.author),
      content,
      date,
      permalink: `/newsletter/archive/${slug}`,
      slug,

      hero: {
        childImageSharp: {}
      }
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFeaturedNewsletters() {
  const allNewsletters = await getAllNewsletters()

  return allNewsletters.filter(newsletter => newsletter.isFeatured)
}

export async function getNewsletterBySlug(slug) {
  const allNewsletters = await getAllNewsletters()
  const findBySlug = buildFindBySlug(allNewsletters)

  const newsletter = findBySlug(slug)

  return {
    ...newsletter,
    related: newsletter.related.map(findBySlug)
  }
}
