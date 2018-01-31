module.exports = {
  siteMetadata: {
    title: `Brap Brap Woop Woop`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i36bq3acg6sq`,
        accessToken: `fdc5106094c2bb011b3d070801b880af1e31ab3dd70ebcff96e5fe73b75d5b0a`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
