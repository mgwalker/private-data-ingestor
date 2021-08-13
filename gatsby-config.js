module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node: { sourceInstanceName } }) => sourceInstanceName,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./interviews",
        name: "interviews",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./questions",
        name: "questions",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
