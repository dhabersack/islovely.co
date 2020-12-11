const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
      allMdx(filter: {
        fields: {
          type: {
            eq: "${sourceInstanceName}"
          }
        }
      }) {
        edges {
          node {
            fields {
              permalink
              slug
              type
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

  response.data.allMdx.edges.forEach(({ node }) => {
    const { permalink, slug, type } = node.fields

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

  await createPages('course')
  await createPages('firetip')
  await createPages('newsletter')
  await createPages('page')
  await createPages('post')
  await createPages('project')

  const posts = await graphql(`
    {
      allMdx(filter: {
        fields: {
          type: {
            eq: "post"
          }
        }
      }) {
        edges {
          node {
            frontmatter {
              categories
            }
          }
        }
      }
    }
  `)

  const getCategoriesForEdge = ({ node }) => node.frontmatter.categories
  const allCategories = posts.data.allMdx.edges.map(getCategoriesForEdge).flat()
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


  const firetips = await graphql(`
    {
      allMdx(filter: {
        fields: {
          type: {
            eq: "firetip"
          }
        }
      }) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const getTagsForEdge = ({ node }) => node.frontmatter.tags
  const allTags = firetips.data.allMdx.edges.map(getTagsForEdge).flat()
  const uniqueTags = [...new Set(allTags)]

  uniqueTags.forEach(tag => {
    const permalink = `/firetips/tags/${slugify(tag)}`

    actions.createPage({
      component: path.resolve(`src/templates/firetips/tag.js`),
      context: {
        tag
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })
}

exports.onCreateNode = ({ actions, getNode, node }) => {
  const parent = getNode(node.parent)

  if (node.internal.type === `Mdx`) {
    const createNodeFields = buildCreateNodeFields(node, actions.createNodeField)
    const [,, date, slug] = createFilePath({ node, getNode }).match(/^\/((\d{4}-\d{2}-\d{2})-)?(.*?)\/?$/)

    createNodeFields({
      date,
      slug,
      ...({
        courses: {
          permalink: `/courses/${slug}`,
          type: `course`,
        },
        firetips: {
          permalink: `/firetips/${slug}`,
          type: `firetip`,
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
          hero: `hero.jpg`,
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
