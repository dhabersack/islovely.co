import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getAllPosts } from '@/lib/api/posts'
import slugify from '@/lib/slugify'

const POSTS_DIRECTORY_PATH = path.join(process.cwd(), '_posts')

export async function getAllCategories() {
  const directories = fs.readdirSync(POSTS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  const categories = (await Promise.all(directories.map(async ({
    name,
  }) => {
    const file = fs.readFileSync(path.join(POSTS_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const { data } = matter(file)

    return data.categories
  }))).flat(1)

  const uniqueCategories = [...new Set(categories)]

  return uniqueCategories.map(category => {
    const slug = slugify(category)

    return {
      permalink: `/categories/${slug}`,
      slug,
      title: category,
    }
  }).sort((a, b) => b.slug > a.slug)
}

export async function getAllCategoriesWithPosts() {
  const allCategories = await getAllCategories()
  const allPosts = await getAllPosts()

  return allCategories.map(category => {
    const posts = allPosts
      .filter(post => post.categories.map(({ slug }) => slug)
      .includes(category.slug))

    return {
      ...category,
      posts,
    }
  })
}

export async function getCategoryByTitle(title) {
  const allCategories = await getAllCategories()

  return allCategories.find(category => category.title === title)
}

export async function getCategoryWithPostsBySlug(slug) {
  const allCategoriesWithPosts = await getAllCategoriesWithPosts()

  return allCategoriesWithPosts.find(category => category.slug === slug)
}
