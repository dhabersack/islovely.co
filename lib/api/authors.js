import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const AUTHORS_DIRECTORY_PATH = path.join(process.cwd(), '_authors')

export async function getAllAuthors() {
  const directories = fs.readdirSync(AUTHORS_DIRECTORY_PATH, {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory())

  const authors = directories.map(({
    name,
  }) => {
    const file = fs.readFileSync(path.join(AUTHORS_DIRECTORY_PATH, `${name}/index.md`), 'utf8')

    const {
      content,
      data,
    } = matter(file)

    return {
      ...data,
      avatar: `/api/authors/${name}/images/${name}.jpg`,
      slug: name,
    }
  })

  return authors
}

export async function getAuthorBySlug(slug) {
  const allAuthors = await getAllAuthors()

  return allAuthors.find(author => author.slug === slug)
}
