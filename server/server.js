(function() {
  'use strict';
  var express, extractFields, fs, inflect, isInvisibleFile, isSeparator, port, send404, sendMultipleResult, sendSingularResult, server, splitFrontmatter, splitName;

  express = require('express');

  inflect = require('i')();

  fs = require('fs');

  port = process.env.PORT || 1986;

  server = express();

  server.all('*', function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With');
    return next();
  });

  server.get('/:directory', function(request, response) {
    var directory, pages;
    directory = request.params.directory;
    pages = [];
    return fs.readdir(directory, function(error, files) {
      var file, path, remainingFiles, _i, _len, _results;
      if (error) {
        return send404(response, error);
      }
      remainingFiles = files.length;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        if (isInvisibleFile(file)) {
          if ((remainingFiles -= 1) === 0) {
            _results.push(sendMultipleResult(response, directory, pages));
          } else {
            _results.push(void 0);
          }
        } else {
          path = "" + directory + "/" + file;
          _results.push(fs.readFile("" + path + "/index.md", 'utf8', function(error, data) {
            var fields;
            if (error) {
              return send404(response, error);
            }
            fields = extractFields(data);
            return fs.readdir("" + path + "/images", function(error, imageFiles) {
              var currentFile, imageFile, remainingImages, _j, _len1, _ref, _ref1, _results1;
              if (error) {
                currentFile = files[files.length - remainingFiles];
                _ref = splitName(currentFile), fields.id = _ref[0], fields.slug = _ref[1];
                pages.push(fields);
                if ((remainingFiles -= 1) === 0) {
                  return sendMultipleResult(response, directory, pages);
                }
              } else {
                fields.images = [];
                remainingImages = imageFiles.length;
                _results1 = [];
                for (_j = 0, _len1 = imageFiles.length; _j < _len1; _j++) {
                  imageFile = imageFiles[_j];
                  if (isInvisibleFile(imageFile)) {
                    if ((remainingImages -= 1) === 0) {
                      currentFile = files[files.length - remainingFiles];
                      _ref1 = splitName(currentFile), fields.id = _ref1[0], fields.slug = _ref1[1];
                      pages.push(fields);
                      if ((remainingFiles -= 1) === 0) {
                        _results1.push(sendMultipleResult(response, directory, pages));
                      } else {
                        _results1.push(void 0);
                      }
                    } else {
                      _results1.push(void 0);
                    }
                  } else {
                    _results1.push(fs.readFile("" + path + "/images/" + imageFile, function(error, data) {
                      var _ref2;
                      if (error) {
                        return send404(response, error);
                      }
                      fields.images.push({
                        base64: data.length,
                        file: imageFile,
                        path: path,
                        mime: 'image/png'
                      });
                      if ((remainingImages -= 1) === 0) {
                        currentFile = files[files.length - remainingFiles];
                        _ref2 = splitName(currentFile), fields.id = _ref2[0], fields.slug = _ref2[1];
                        pages.push(fields);
                        if ((remainingFiles -= 1) === 0) {
                          return sendMultipleResult(response, directory, pages);
                        }
                      }
                    }));
                  }
                }
                return _results1;
              }
            });
          }));
        }
      }
      return _results;
    });
  });

  server.get('/:directory/:slug', function(request, response) {
    var directory, singularName, slug;
    slug = request.params.slug;
    directory = request.params.directory;
    singularName = inflect.singularize(directory);
    return fs.readdir(directory, function(error, files) {
      var file, match, path, _i, _len;
      if (error) {
        return send404(response, error);
      }
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        if (!isInvisibleFile(file) && !match) {
          if (file.indexOf(slug) !== -1) {
            match = file;
          }
        }
      }
      path = "" + directory + "/" + match;
      return fs.readFile("" + path + "/index.md", 'utf8', function(error, data) {
        var fields, _ref;
        if (error) {
          return send404(response, error);
        }
        fields = extractFields(data);
        _ref = splitName(match), fields.id = _ref[0], fields.slug = _ref[1];
        return fs.readdir("" + path + "/images/", function(error, files) {
          var images, remainingImages, _j, _len1;
          if (error) {
            return sendSingularResult(response, singularName, fields);
          }
          images = [];
          remainingImages = files.length;
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            if (isInvisibleFile(file)) {
              if ((remainingImages -= 1) === 0) {
                fields.images = images;
                return sendSingularResult(response, singularName, fields);
              }
            } else {
              fs.readFile("" + path + "/images/" + file, function(error, data) {
                if (error) {
                  return send404(response, error);
                }
                images.push({
                  base64: new Buffer(data).toString('base64'),
                  mime: 'image/png'
                });
                if ((remainingImages -= 1) === 0) {
                  fields.images = images;
                  return sendSingularResult(response, singularName, fields);
                }
              });
            }
          }
        });
      });
    });
  });

  server.get('/:directory/:slug/:filename', function(request, response) {
    var directory, filename, slug;
    directory = request.params.directory;
    filename = request.params.filename;
    slug = request.params.slug;
    return fs.readdir(directory, function(error, files) {
      var directorySlug, file, id, _i, _len, _ref, _results;
      if (error) {
        return send404(response, error);
      }
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        if (!isInvisibleFile(file)) {
          _ref = splitName(file), id = _ref[0], directorySlug = _ref[1];
          if (directorySlug === slug) {
            _results.push(fs.readFile("" + directory + "/" + file + "/images/" + filename, function(error, data) {
              if (error) {
                return send404(response, error);
              }
              response.header('Content-Type', 'image/png');
              return response.end(data, 'binary');
            }));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
  });

  extractFields = function(data) {
    var fields, isInFrontmatter, key, line, lines, value, _i, _len, _ref, _ref1;
    fields = {};
    isInFrontmatter = false;
    lines = [];
    _ref = data.split('\n');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      if (isSeparator(line)) {
        isInFrontmatter = !isInFrontmatter;
      } else {
        if (isInFrontmatter) {
          _ref1 = splitFrontmatter(line), key = _ref1[0], value = _ref1[1];
          fields[key] = value;
        } else if (line) {
          lines.push(line);
        }
      }
    }
    fields.body = lines.join('\n\n');
    return fields;
  };

  isInvisibleFile = function(file) {
    var regexp;
    regexp = /^\..*/;
    return regexp.test(file);
  };

  isSeparator = function(line) {
    var regexp;
    regexp = /^---$/;
    return regexp.test(line);
  };

  splitFrontmatter = function(line) {
    var regexp;
    regexp = /(.+?)\s*:\s*(.+)/;
    return regexp.exec(line).slice(1, 3);
  };

  splitName = function(file) {
    var regexp;
    regexp = /(\d+)-(.+)/;
    return regexp.exec(file).slice(1, 3);
  };

  sendSingularResult = function(response, name, fields) {
    var result;
    (result = {})[name] = fields;
    return response.send(result);
  };

  sendMultipleResult = function(response, name, pages) {
    var result;
    (result = {})[name] = pages;
    return response.send(result);
  };

  send404 = function(response, error) {
    console.log(error);
    response.statusCode = 404;
    return response.end('404: Not Found');
  };

  server.listen(port);

  console.log("Listening on port " + port);

}).call(this);

/*
//@ sourceMappingURL=server.js.map
*/