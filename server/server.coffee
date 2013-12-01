'use strict'

 # var bson = require('bson')
express = require('express')
inflect = require('i')()
fs = require('fs')
port = process.env.PORT || 1986
server = express()

server.all('*', (request, response, next) ->
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
)

server.get('/:directory', (request, response) ->
  directory = request.params.directory

  fs.readdir(directory, (error, files) ->
    return send404(response, error) if error

    pages = []
    remainingFiles = files.length

    for file in files
      if isInvisibleFile(file)
        if (remainingFiles -= 1) is 0
          sendMultipleResult(response, directory, pages)
      else
        path = "#{ directory }/#{ file }"

        fs.readFile("#{ path }/index.md", 'utf8', (error, data) ->
          return send404(response, error) if error

          fields = extractFields(data)
          currentFile = files[files.length - remainingFiles]
          [fields.id, fields.slug] = splitName(currentFile)

          pages.push(fields)

          if (remainingFiles -= 1) is 0
            sendMultipleResult(response, directory, pages)
        )
  )
)

server.get('/:directory/:slug', (request, response) ->
  slug = request.params.slug
  directory = request.params.directory
  singularName = inflect.singularize(directory)

  fs.readdir(directory, (error, files) ->
    return send404(response, error) if error

    for file in files
      if not isInvisibleFile(file) and not match
        if file.indexOf(slug) isnt -1
          match = file

    path = "#{ directory }/#{ match }"

    fs.readFile("#{ path }/index.md", 'utf8', (error, data) ->
      return send404(response, error) if error

      fields = extractFields(data)
      [fields.id, fields.slug] = splitName(match)

      return sendSingularResult(response, singularName, fields)
    )
  )
)

server.get('/:directory/:slug/:filename', (request, response) ->
  directory = request.params.directory
  filename = request.params.filename
  slug = request.params.slug

  fs.readdir(directory, (error, files) ->
    return send404(response, error) if error

    for file in files
      if not isInvisibleFile(file)
        [id, directorySlug] = splitName(file)

        if directorySlug is slug
          path = "#{ directory }/#{ file }/images/#{ filename }"

          fs.readFile(path, (error, data) ->
            return send404(response, error) if error

            response.header('Content-Type', 'image/png')
            response.end(data, 'binary')
          )
  )
)

extractFields = (data) ->
  fields = {}
  isInFrontmatter = false
  lines = []

  for line in data.split('\n')
    if isSeparator(line)
      isInFrontmatter = not isInFrontmatter
    else
      if isInFrontmatter
        [key, value] = splitFrontmatter(line)
        fields[key] = value
      else
        lines.push(line)

  fields.body = lines.join('\n')
  fields

isInvisibleFile = (file) ->
  regexp = /^\..*/
  regexp.test(file)

isSeparator = (line) ->
  regexp = /^---$/
  regexp.test(line)

splitFrontmatter = (line) ->
  regexp = /(.+?)\s*:\s*(.+)/
  regexp.exec(line)[1..2]

splitName = (file) ->
  regexp = /(\d+)-(.+)/
  regexp.exec(file)[1..2]

sendSingularResult = (response, name, fields) ->
  (result = {})[name] = fields
  response.send(result)

sendMultipleResult = (response, name, pages) ->
  (result = {})[name] = pages
  response.send(result)

send404 = (response, error) ->
  console.log(error)
  response.statusCode = 404
  response.end('404: Not Found')

server.listen(port)
console.log("Listening on port #{ port }")

# require('http').get('http://localhost:1986/clients/gini/1-medium.png')
