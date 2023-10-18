/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Daniil Koziura - Full Stack developer`,
    author: `cozyura`,
    siteUrl: `https://www.cozyura.tld`
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:100,300,400,700,900', 'sans-serif']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cozyura-full-stack-developer`,
        short_name: `cozyura`,
        start_url: `/`,
        background_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, 
      },
    },
	  {
		  resolve: 'gatsby-plugin-react-svg',
		  options: {
			  rule: {
				  include: `${__dirname}/src/images/`
			  }
		  }
	  }
]
};