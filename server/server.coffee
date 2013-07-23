express = require 'express'
fs = require 'fs'

server = express()

console.log 'hello'

server.all '*', (request, response, next) ->
  response.header 'Access-Control-Allow-Origin', '*'
  response.header 'Access-Control-Allow-Headers', 'X-Requested-With'
  next()

server.get '/', (request, response) ->
  response.send 'index'

server.get '/clients', (request, response) ->
  fs.readdir 'clients', (error, files) ->
    return console.log error if error

    clients = []

    for file in files
      client = parseClientFile file
      clients.push client if client

    response.send { clients: clients }

server.get '/clients/:id', (request, response) ->
  fs.readdir 'clients', (error, files) ->
    return console.log error if error

    for file in files
      client = parseClientFile file

      return response.send { client: client } if client and client.id == request.params.id

    # no client with given ID exists
    response.statusCode = 404
    response.send 'Error 404: no client found'

server.get '/posts', (request, response) ->
  response.send { post: []}

server.get '/posts/:id', (request, response) ->
  response.send { post: { id: request.params.id, title: 'post title' }}

server.get '/test', (request, response) ->
  response.send 'test'

port = process.env.PORT || 1986
server.listen port
console.log "Listening on port #{ port }"




####
# CLIENT
####

parseClientFile = (file) ->
  if fs.lstatSync("clients/#{ file }").isDirectory()
    elements = /(\d+)-(.+)/.exec file
    id = elements[1]
    name = elements[2]

    { id: id, name: name }
