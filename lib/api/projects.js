import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const PROJECTS_DIRECTORY_PATH = path.join(process.cwd(), '_projects')

export async function getAllProjects() {
  const directories = fs.readdirSync(PROJECTS_DIRECTORY_PATH, {
    withFileTypes: true
  }).filter(dirent => dirent.isDirectory())

  return (await Promise.all(directories.map(async ({
    name
  }) => {
    const [, date, slug] = name.match(/^(\d+-\d+-\d+)-(.*)$/)

    const file = fs.readFileSync(path.join(PROJECTS_DIRECTORY_PATH, name, 'index.mdx'), 'utf-8')

    const {
      content,
      data,
    } = matter(file)

    const figures = data.figures?.reduce((obj, figure) => {
      const [, figureName] = figure.match(/(.*)\..*$/)

      return ({
        ...obj,
        [figureName]: `/api/projects/${name}/images/${figure}`,
      })
    }, {}) ?? null

    return {
      ...data,
      content,
      date,
      figures,
      hero: `/api/projects/${name}/images/hero.png`,
      permalink: `/projects/${slug}`,
      slug,
    }
  }))).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getFeaturedProject() {
  const project = await getProjectBySlug('lovelicons')

  return project
}

export async function getProjectBySlug(slug) {
  const allProjects = await getAllProjects()
  const project = allProjects.find(project => project.slug === slug)

  return project
}
