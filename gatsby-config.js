const types = [
  'courses',
  'firetips',
  'newsletters',
  'pages',
  'posts',
  'projects'
]

module.exports = {
  siteMetadata: {
    description: ``,
    siteUrl: `https://islovely.co`,
    title: `islovely`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('postcss-combine-media-query')()
        ]
      }
    },
    ...types.map(name => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name,
        path: `${__dirname}/_${name}`,
      }
    })), {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: require.resolve(`./plugins/gatsby-remark-islovely-custom-utility-first-css`),
          },
        ]
      }
    }, {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(
            sort: {
              fields: path
            }
          ) {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ allSitePage, site }) => {
          const pages = allSitePage.edges.map(({ node }) => node)
          const { siteUrl } = site.siteMetadata

          return pages.map(({ path }) => ({
            url: `${siteUrl}${path}`
          }))
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
}
