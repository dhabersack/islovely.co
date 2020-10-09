const path = require(`path`)

const slugify = text => text.toLowerCase().replace(/ /g, '-')

const buildCreatePages = (createPage, graphql) => {
  const TEMPLATE_PATH_BY_SOURCE_INSTANCE_NAME = {
    courses: `src/templates/course.js`,
    newsletters: `src/templates/newsletter.js`,
    pages: `src/templates/page.js`,
    posts: `src/templates/post.js`,
    projects: `src/templates/project.js`,
  }

  return async sourceInstanceName => {
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
      const { permalink, slug } = node.childMarkdownRemark.fields

      createPage({
        component: path.resolve(TEMPLATE_PATH_BY_SOURCE_INSTANCE_NAME[sourceInstanceName]),
        context: {
          slug
        },
        path: permalink
      })

      console.log(`created page at ${permalink}`)
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const createPages = buildCreatePages(actions.createPage, graphql)

  createPages('courses')
  createPages('newsletters')
  createPages('pages')
  createPages('posts')
  createPages('projects')

  const postsForCategories = await graphql(`
    {
      allFile(filter: {
        sourceInstanceName: {
          eq: "posts"
        }
      }) {
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

  const allCategories = postsForCategories.data.allFile.edges.map(({ node }) => node.childMarkdownRemark.frontmatter.categories).reduce((allCategories, categories) => [...new Set([...allCategories, ...categories])], [])
  allCategories.forEach(category => {
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

const buildCreateNodeFields = (node, createNodeField) => fields => {
  Object.entries(fields).forEach(([name, value]) => {
    createNodeField({
      node,
      name,
      value,
    })
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
