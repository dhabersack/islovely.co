const path = require(`path`)

const slugify = text => text.toLowerCase().replace(/ /g, '-')

const buildCreateNodeFields = (node, createNodeField) => fields => {
  Object.entries(fields).forEach(([name, value]) => {
    createNodeField({
      name,
      node,
      value,
    })
  })
}

const buildCreatePages = (createPage, graphql) => async sourceInstanceName => {
  const response = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "${sourceInstanceName}"
        }
      }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                permalink
                slug
                type
              }
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for “${sourceInstanceName}”.`)
    return
  }

  response.data.allFile.edges.forEach(({ node }) => {
    const { permalink, slug, type } = node.childMarkdownRemark.fields

    createPage({
      component: path.resolve(`src/templates/${type}.js`),
      context: {
        slug
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const createPages = buildCreatePages(actions.createPage, graphql)

  await createPages('courses')
  await createPages('newsletters')
  await createPages('pages')
  await createPages('posts')
  await createPages('projects')

  const posts = await graphql(`
    {
      allFile(
        filter: {
          sourceInstanceName: {
            eq: "posts"
          }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                categories
              }
            }
          }
        }
      }
    }
  `)

  const getCategoriesForEdge = ({ node }) => node.childMarkdownRemark.frontmatter.categories
  const allCategories = posts.data.allFile.edges.map(getCategoriesForEdge).flat()
  const uniqueCategories = [...new Set(allCategories)]

  uniqueCategories.forEach(category => {
    const permalink = `/categories/${slugify(category)}`

    actions.createPage({
      component: path.resolve(`src/templates/category.js`),
      context: {
        category
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  const parent = getNode(node.parent)

  if (parent) {
    const createNodeFields = buildCreateNodeFields(node, actions.createNodeField)
    const [,, date, slug] = parent.name.match(/^((\d{4}-\d{2}-\d{2})-)?(.*)/)

    createNodeFields({
      date,
      slug,
      ...({
        courses: {
          permalink: `/courses/${slug}`,
          type: `course`,
        },
        newsletters: {
          permalink: `/newsletter/archive/${slug}`,
          type: `newsletter`,
        },
        pages: {
          permalink: `/${slug}`,
          type: `page`,
        },
        posts: {
          permalink: `/posts/${slug}`,
          type: `post`,
        },
        projects: {
          permalink: `/projects/${slug}`,
          type: `project`,
        },
      }[parent.sourceInstanceName]),
    })
  }
}
