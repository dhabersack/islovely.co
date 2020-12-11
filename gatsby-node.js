const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const slugify = text => text.toLowerCase().replace(/ /g, '-')

const buildCreatePages = (createPage, graphql, reporter) => async type => {
  const response = await graphql(`
    {
      all${type} {
        edges {
          node {
            permalink
            slug
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for type “${type}”.`)
    return
  }

  response.data[`all${type}`].edges.forEach(({ node }) => {
    const { permalink, slug } = node

    createPage({
      component: path.resolve(`src/templates/${type.toLowerCase()}.js`),
      context: {
        slug
      },
      path: permalink
    })

    console.log(`created page at ${permalink}`)
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const createPages = buildCreatePages(actions.createPage, graphql, reporter)

  await createPages('Course')
  await createPages('Firetip')
  await createPages('Newsletter')
  await createPages('Page')
  await createPages('Post')
  await createPages('Project')

  const posts = await graphql(`
    {
      allPost {
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
  const allCategories = posts.data.allPost.edges.map(getCategoriesForEdge).flat()
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
      allFiretip {
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
  const allTags = firetips.data.allFiretip.edges.map(getTagsForEdge).flat()
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

const buildResolverFor = fieldName => (source, args, context, info) => {
  const type = info.schema.getType('Mdx');
  const mdxFields = type.getFields();
  const resolver = mdxFields[fieldName].resolve;

  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  });

  return resolver(mdxNode, args, context, {
    fieldName,
  });
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Course: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
    Firetip: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
    Newsletter: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
    Page: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
    Post: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
    Project: {
      body: {
        type: 'String!',
        resolve: buildResolverFor('body'),
      },
    },
  })
}

exports.onCreateNode = ({ actions, createNodeId, getNode, node }) => {
  const parent = getNode(node.parent)

  if (node.internal.type === `Mdx`) {
    // const createNodeFields = buildCreateNodeFields(node, actions.createNodeField)
    const [,, date, slug] = createFilePath({ node, getNode }).match(/^\/((\d{4}-\d{2}-\d{2})-)?(.*?)\/?$/)

    const fields = ({
      date,
      slug,
      ...({
        authors: {
          avatar: `avatar.jpg`,
          permalink: `/authors/${slug}`,
        },
        courses: {
          permalink: `/courses/${slug}`,
        },
        firetips: {
          permalink: `/firetips/${slug}`,
        },
        newsletters: {
          permalink: `/newsletter/archive/${slug}`,
        },
        pages: {
          permalink: `/${slug}`,
        },
        posts: {
          hero: `hero.jpg`,
          permalink: `/posts/${slug}`,
        },
        projects: {
          permalink: `/projects/${slug}`,
        },
      }[parent.sourceInstanceName]),
    })

    const TYPE_FOR_SOURCE_INSTANCE_NAME = {
      authors: 'Author',
      courses: 'Course',
      firetips: 'Firetip',
      newsletters: `Newsletter`,
      pages: `Page`,
      posts: `Post`,
      projects: `Project`,
    }

    const type = TYPE_FOR_SOURCE_INSTANCE_NAME[parent.sourceInstanceName]

    actions.createNode({
      ...node,
      ...fields,
      id: createNodeId(`${node.id} >>> ${type}`),
      parent: node.id,
      children: [],
      internal: {
        type,
        contentDigest: node.internal.contentDigest,
      },
    })

    actions.createParentChildLink({
      parent,
      child: node
    })
  }
}
