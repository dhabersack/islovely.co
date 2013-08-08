express = require 'express'
fs = require 'fs'

server = express()

server.all '*', (request, response, next) ->
  response.header 'Access-Control-Allow-Origin', '*'
  response.header 'Access-Control-Allow-Headers', 'X-Requested-With'
  next()

server.get '/', (request, response) ->
  response.send 'index'

server.get '/clients', (request, response) ->
  parseIndex 'clients', response

server.get '/clients/:slug', (request, response) ->
  parseFileBySlug 'client', 'clients', request.params.slug, parseFile, response

    # no client with given ID exists
    # response.statusCode = 404
    # response.send 'Error 404: no client found'

server.get '/pages', (request, response) ->
  parseIndex 'pages', response

server.get '/pages/:slug', (request, response) ->
  parseFileBySlug 'page', 'pages', request.params.slug, parseFile, response

server.get '/posts', (request, response) ->
  parseIndex 'posts', response

server.get '/posts/:slug', (request, response) ->
  parseFileBySlug 'post', 'posts', request.params.slug, parseFile, response

server.get '/test', (request, response) ->
  response.send 'test'

port = process.env.PORT || 1986
server.listen port
console.log "Listening on port #{ port }"




####
# Helpers
####

parseFile = (file, type, response) ->
  name_elements = /(\d+)-(.+)/.exec file

  # object = {
  #   id: name_elements[1]
  #   slug: name_elements[2]
  # }

  fs.readFile "#{ file }/index.md", 'utf8', (error, data) ->
    console.log error if error

    # add extracted fields to page
    fields = extractFields data
    # object[key] = fields[key] for key of fields
    fields.id = name_elements[1]
    fields.slug = name_elements[2]

    (json = {})[type] = fields
    response.send json


parseIndex = (directory, response) ->
  fs.readdir directory, (error, files) ->
    return console.log error if error

    pages = []
    remaining = files.length
    invisibles = 0
    index = 0

    for file in files
      # ignore invisible files
      if not /^\..*/.test file
        fs.readFile "#{ directory }/#{ file }/index.md", 'utf8', (error, data) ->
          console.log error if error

          fields = extractFields data

          name_elements = /(\d+)-(.+)/.exec files[index]
          if name_elements
            fields.id = name_elements[1]
            fields.slug = name_elements[2]

          pages.push fields
          remaining--
          index++

          (json = {})[directory] = pages
          response.send json if remaining - invisibles == 0
      else
        invisibles++
        index++

        (json = {})[directory] = pages
        response.send json if remaining - invisibles == 0

extractFields = (data) ->
  is_in_frontmatter = false
  body = ''
  fields = {}

  for line in data.split "\n"
    if /^---$/.test line
      is_in_frontmatter = not is_in_frontmatter
    else
      if is_in_frontmatter
        key_value = /(.+?)\s*:\s*(.+)/.exec line
        key = key_value[1]
        value = key_value[2]

        fields[key] = value
      else
        body += "#{ line }\n"

  fields.body = body
  fields


parseFileBySlug = (singular, plural, slug, callback, response) ->
  directory = plural

  fs.readdir directory, (error, files) ->
    return console.log error if error

    for file in files
      # ignore invisible files
      if not /^\..*/.test file
        if file.indexOf(slug) != -1
          path = "#{ directory }/#{ file }"
          break

    callback path, singular, response
