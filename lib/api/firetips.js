import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import getMDXSource from '@/lib/get-mdx-source'
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

    const mdxSource = await getMDXSource(content)

    const tags = data.tags?.map(tag => ({
      title: tag,
      permalink: `/firetips/tags/${slugify(tag)}`,
    }))

    return {
      ...data,
      date,
      mdxSource,
      permalink: `/firetips/${slug}`,
      slug,
      tags,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFiretipsByTag(tag) {
  const allFiretips = await getAllFiretips()

  return allFiretips.filter(firetip => firetip.tags.some(({ title }) => title === tag))
}

export async function getFiretipBySlug(slug) {
  const allFiretips = await getAllFiretips()

  const firetip = allFiretips.find(firetip => firetip.slug === slug)

  console.log({ tags: firetip.tags })

  return firetip
}
