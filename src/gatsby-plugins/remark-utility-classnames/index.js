const visit = require('unist-util-visit')
const TYPE_TO_CLASSNAME = require('../../config/type-to-classname')

const multilineToSinglelineString = string => string.split(/\n/).join('').replace(/ +/g, ' ').trim()
const getClassnamesForType = type => multilineToSinglelineString(TYPE_TO_CLASSNAME[type])

module.exports = ({
  markdownAST
}) => {
  Object.keys(TYPE_TO_CLASSNAME).forEach(type => {
    visit(markdownAST, type, node => {
      node.data = node.data || {}

      node.data.hProperties = {
        className: `background-color-green-200 ${getClassnamesForType(type)}`
      }
    })
  })

  return markdownAST
}
