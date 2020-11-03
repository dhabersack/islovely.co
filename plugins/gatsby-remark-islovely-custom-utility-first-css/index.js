const visit = require('unist-util-visit')

const TYPE_TO_CLASSNAME = {
  listItem: 'font-size-16-medium m:font-size-18-medium',
  paragraph: 'font-size-16-medium m:font-size-18-medium',
}

module.exports = ({ markdownAST }) => {
  Object.keys(TYPE_TO_CLASSNAME).forEach(type => {
    visit(markdownAST, type, node => {
      node.data = node.data || {}
  
      node.data.hProperties = {
        className: TYPE_TO_CLASSNAME[type]
      }
    })
  })

  return markdownAST
}