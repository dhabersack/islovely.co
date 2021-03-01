import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const PAGES_DIRECTORY_PATH = path.join(process.cwd(), '_pages')

export async function getAllPages() {
  const directories = fs.readdirSync(PAGES_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name
  }) => {
    const slug = name

    const file = fs.readFileSync(path.join(PAGES_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/pages/${name}/images/${figure}`,
      })
    }, {}) ?? null

    return {
      ...data,
      content,
      figures,
      permalink: `/${slug}`,
      slug,
    }
  })))
}

export async function getPageBySlug(slug) {
  console.log({ slug })
  const allPages = await getAllPages()

  return allPages.find(page => page.slug === slug)
}
