import fs from 'fs'
import path from 'path'

const DIRECTORY = path.join(process.cwd(), '_authors')

export function getAllAuthors() {
  const directories = fs.readdirSync(DIRECTORY, {
    withFileTypes: true,
  }).filter(dirent => dirent.isDirectory())

  const authors = directories.map(({
    name,
  }) => {
    const json = JSON.parse(fs.readFileSync(path.join(DIRECTORY, `${name}/${name}.json`), 'utf8'))

    return {
      ...json,
    }
  })
}

export function getAuthor() {
}
