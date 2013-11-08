(function () {
  'use strict';

  // var bson = require('bson'),
  var    express = require('express'),
      inflect = require('i')(),
      fs = require('fs'),
      port = process.env.PORT || 1986,
      server = express();

  server.all('*', function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

  server.get('/', function (request, response) {
    response.send({ message: 'Careful now.' });
  });

  server.get('/:directory', function (request, response) {
    var directory = request.params.directory,
        fields,
        pages = [],
        path,
        remainingFiles,
        result = {},
        splitName;

    fs.readdir(directory, function (error, files) {
      if (error) {
        return console.error(error);
      }

      remainingFiles = files.length;

      files.forEach(function (file) {
        // ignore invisible files
        if (!/^\..*/.test(file)) {
          path = directory + '/' + file + '/index.md';

          fs.readFile(path, 'utf8', function (error, data) {
            if (error) {
              return console.error(error);
            }

            fields = extractFields(data);

            splitName = /(\d+)-(.+)/.exec(files[files.length - remainingFiles]);
            if (splitName) {
              fields.id = splitName[1];
              fields.slug = splitName[2];
            }

            pages.push(fields);

            if ((remainingFiles -= 1) === 0) {
              result[directory] = pages;
              response.send(result);
            }
          });
        } else {
          if ((remainingFiles -= 1) === 0) {
            result[directory] = pages;
            response.send(result);
          }
        }
      });
    });
  });

  server.get('/:directory/:slug', function (request, response) {
    var directory = request.params.directory,
        fields = {},
        match,
        path,
        result = {},
        slug = request.params.slug,
        splitName;

    fs.readdir(directory, function (error, files) {
      if (error) {
        return console.error(error);
      }

      files.forEach(function (file) {
        // ignore invisible files
        if (!(/^\..*/.test(file)) && !match) {
          if (file.indexOf(slug) !== -1) {
            match = file;
          }
        }
      });

      path = directory + '/' + match;

      fs.readFile(path + '/index.md', 'utf8', function (error, data) {
        if (error) {
          console.error(error);
        }

        fields = extractFields(data);

        splitName = /(\d+)-(.+)/.exec(match);
        fields.id = splitName[1];
        fields.slug = splitName[2];

        fs.readdir(path + '/images', function (error, files) {
          // send result now if no image-directory exist
          if (error) {

            (result = {})[inflect.singularize(directory)] = fields;
            response.send(result);

            return console.error(error);
          }

          var images = [];
          var imagesRemaining = files.length;

          files.forEach(function (file) {
            if (!(/^\..*/.test(file))) {
              fs.readFile(path + '/images/' + file, function (error, data) {
                if (error) {
                  return console.error(error);
                }

                images.push({
                  base64: new Buffer(data).toString('base64'),
                  mime: 'image/png'
                });

                imagesRemaining -= 1;

                if (imagesRemaining === 0) {
                  fields.images = images;

                  (result = {})[inflect.singularize(directory)] = fields;
                  response.send(result);
                }
              });
            } else {
              imagesRemaining -= 1;

              if (imagesRemaining === 0) {
                fields.images = images;

                (result = {})[inflect.singularize(directory)] = fields;
                response.send(result);
              }
            }
          });
        });
      });
    });

    // no entry with given slug exists
    // response.statusCode = 404;
    // response.send('Error 404: no entry found');
  });

  // server.get('/:directory/:slug/:filename', function (request, response) {
  //   var directory = request.params.directory,
  //       directorySlug,
  //       filename = request.params.filename,
  //       slug = request.params.slug,
  //       splitName;

  //   fs.readdir(directory, function (error, files) {
  //     if (error) {
  //       return console.error(error);
  //     }

  //     files.forEach(function (file) {
  //       // ignore invisible files
  //       if (!(/^\..*/.test(file))) {
  //         splitName = /(\d+)-(.+)/.exec(file);
  //         directorySlug = splitName[2];

  //         if (directorySlug === slug) {
  //           var path = directory  + '/' + file + '/images/' + filename;

  //           fs.readFile(path, function (error, data) {
  //             if (error) {
  //               return console.error(error);
  //             }

  //             response.header('Content-Type', 'image/png');
  //             response.end(data, 'binary');
  //           });
  //         }
  //       }
  //     });
  //   });
  // });

  var extractFields = function (data) {
    var fields = {},
        isInFrontmatter = false,
        key,
        lines = [],
        splitLine,
        value;

    data.split('\n').forEach(function (line) {
      if (/^---$/.test(line)) {
        isInFrontmatter = !isInFrontmatter;
      } else {
        if (isInFrontmatter) {
          splitLine = /(.+?)\s*:\s*(.+)/.exec(line);
          key = splitLine[1];
          value = splitLine[2];

          fields[key] = value;
        } else {
          if (line) {
            lines.push(line);
          }
        }
      }
    });

    fields.body = lines.join('\n\n');

    return fields;
  };


  server.listen(port);
  console.log('Listening on port ' + port);

  // require('http').get('http://localhost:1986/clients/gini/1-medium.png');
})();
