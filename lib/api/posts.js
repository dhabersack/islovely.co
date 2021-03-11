import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAuthorBySlug } from '@/lib/api/authors'
import getMDXSource from '@/lib/get-mdx-source'
import slugify from '@/lib/slugify'

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), '_posts')

export async function getAllPosts() {
  const directories = fs.readdirSync(POSTS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name,
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

    const mdxSource = await getMDXSource(content, {
      attachments,
      figures,
    })

    const categories = data.categories?.map(category => {
      const slug = slugify(category)

      return {
        title: category,
        permalink: `/categories/${slug}`
      }
    })

    return {
      ...data,
      attachments,
      author,
      categories,
      date,
      figures,
      hero: `/api/posts/${name}/images/hero.jpg`,
      mdxSource,
      permalink: `/posts/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostsGroupedByCategory() {
  const allPosts = await getAllPosts()

  const categoryTitles = [
    ...new Set(allPosts.map(({ categories }) => categories.map(({ title }) => title)).flat())
  ].sort((a, b) => a.toLowerCase() > b.toLowerCase())

  return categoryTitles.reduce((object, categoryTitle) => ({
    ...object,
    [categoryTitle]: allPosts.filter(({ categories }) => categories.map(({ title }) => title).includes(categoryTitle))
  }), {})
}

export async function getLatestPosts({ limit }) {
  const allPosts = await getAllPosts()

  return allPosts.slice(0, limit)
}

export async function getPostsByCategory(category) {
  const allPosts = await getAllPosts()

  return allPosts.filter(post => post.categories.map(({ title }) => title).includes(category))
}

export async function getPostBySlug(slug) {
  const allPosts = await getAllPosts()

  return allPosts.find(post => post.slug === slug)
}
