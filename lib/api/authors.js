import fs from 'fs'
import path from 'path'

const DIRECTORY = path.join(process.cwd(), '_authors')

export async function getAllAuthors() {
  // const directories = fs.readdirSync(DIRECTORY, {
  //   withFileTypes: true,
  // }).filter(dirent => dirent.isDirectory())
  //
  // const authors = directories.map(({
  //   name,
  // }) => {
  //   const json = JSON.parse(fs.readFileSync(path.join(DIRECTORY, `${name}/${name}.json`), 'utf8'))
  //
  //   return {
  //     ...json,
  //   }
  // })

  const authors = [
    {
      avatar: "http://www.fillmurray.com/40/40",
      slug: 'dom-habersack',
      name: 'Dom Habersack',
    }
  ]

  return authors
}

export async function getAuthor(slug) {
  return (await getAllAuthors()).find(author => author.slug === slug)
}
