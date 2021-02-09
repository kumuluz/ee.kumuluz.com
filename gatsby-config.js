module.exports = {
    siteMetadata: {
        siteName: "ee.kumuluz.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    precision: 10
                }
            }
        }
    ],
    /*
    flags: {
        DEV_SSR: false
    }
    */
};
