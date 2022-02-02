module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ["@babel/preset-react"]
        }
    },
    rules: {
        indent: ["error", 4, {SwitchCase: 1}],
        quotes: ["error", "double"],
        noConsole: "off",
        semi: ["error", "always"]
    },
    env: {
        browser: true,
        node: true
    }
};
