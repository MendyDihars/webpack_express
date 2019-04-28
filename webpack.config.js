const path = require("path")

module.exports = {
    entry: "./src/application.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'views'),
        hot: true,
        compress: true
    }
}