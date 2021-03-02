import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAuthorBySlug } from '@/lib/api/authors'

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), '_posts')

export async function getAllPosts() {
  const directories = fs.readdirSync(POSTS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name
  }) => {
    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const file = fs.readFileSync(path.join(POSTS_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const author = await getAuthorBySlug(data.author)

    const attachments = data.attachments?.reduce((obj, attachment) => {
      const [, attachmentName] = attachment.match(/(.*)\..*$/)

      return ({
        ...obj,
        [attachmentName]: `/api/posts/${name}/attachments/${attachment}`,
      })
    }, {}) ?? null

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/posts/${name}/images/${figure}`,
      })
    }, {}) ?? null

    return {
      ...data,
      attachments,
      author,
      content,
      date,
      figures,
      hero: `/api/posts/${name}/images/hero.jpg`,
      permalink: `/posts/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getLatestPosts({ limit }) {
  const allPosts = await getAllPosts()

  return allPosts.slice(0, limit)
}

export async function getPostsByCategory(category) {
  const allPosts = await getAllPosts()

  return allPosts.filter(post => post.categories.includes(category))
}

export async function getPostBySlug(slug) {
  const allPosts = await getAllPosts()

  return allPosts.find(post => post.slug === slug)
}
