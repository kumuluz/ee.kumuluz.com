module.exports = {
    siteMetadata: {
        siteName: "ee.kumuluz.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                precision: 10
            }
        }
    ]
};
