module.exports = {
  siteMetadata: {
    title: `Łukasz Warchoł`,
    description: `JavaScript Developer, Software Developer, Programista, Programista Warszawa`,
    author: `Łukasz Warchoł`,
    siteUrl: `localhost:9000`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Łukasz Warchoł`,
        short_name: `Łukasz Warchoł`,
        start_url: `/pl/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        crossOrigin: `use-credentials`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: [/landscape\.svg$/, /menu\.svg$/]
        }
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/pl/`,
          `/pl/o-mnie/`,
          `/pl/uslugi/`,
          `/pl/kontakt/`,
          `/pl/polityka-prywatnosci/`,
          `/en/`,
          `/en/about-me/`,
          `/en/services/`,
          `/en/contact/`,
          `/en/privacy-policy/`
        ],
        workboxConfig: {
          importWorkboxFrom: `cdn`
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `{
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            };
          })
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        configFile: `robots-txt.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-97392728-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "lukaszwarchol.pl"
      }
    }
  ]
};
