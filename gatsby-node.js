const fs = require("fs-extra");
const path = require("path");

exports.onPostBuild = () => {
    fs.copySync(path.join(__dirname, "/static/generator-template"), path.join(__dirname, "/public/generator-template"));
};

/*exports.onCreateNode = ({node, getNode}) => {
    if (node.internal.type === "MarkdownRemark") {
        const fileNode = getNode(node.parent);
        console.log("\n", fileNode.relativePath);
    }
};*/
