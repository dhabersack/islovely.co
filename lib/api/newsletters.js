import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAuthorBySlug } from './authors'

const buildFindBySlug = allItems => slug => allItems.find(item => item.slug === slug)

const NEWSLETTERS_DIRECTORY_PATH = path.join(process.cwd(), '_newsletters')

export async function getAllNewsletters() {
  const directories = fs.readdirSync(NEWSLETTERS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name,
  }) => {
    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const file = fs.readFileSync(path.join(NEWSLETTERS_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const author = await getAuthorBySlug(data.author)

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/newsletters/${name}/images/${figure}`,
      })
    }, {}) ?? null

    return {
      ...data,
      author,
      content,
      date,
      figures,
      hero: `/api/newsletters/${name}/images/hero.jpg`,
      permalink: `/newsletter/archive/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFeaturedNewsletters() {
  const allNewsletters = await getAllNewsletters()

  return allNewsletters.filter(newsletter => newsletter.isFeatured)
}

export async function getLatestNewsletters({ limit }) {
  const allNewsletters = await getAllNewsletters()

  return allNewsletters.slice(0, limit)
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
