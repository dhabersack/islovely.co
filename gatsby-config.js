const types = [
  'courses',
  'firetips',
  'newsletters',
  'pages',
  'posts',
  'projects',
]

module.exports = {
  siteMetadata: {
    description: ``,
    siteUrl: `https://islovely.co`,
    title: `islovely`
  },
  plugins: [
    ...types.map(name => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        ignore: [`**/\.*`],
        name,
        path: `${__dirname}/_${name}/`,
      }
    })), {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1504,
            },
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
  ]
}
