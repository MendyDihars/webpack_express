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
    },
    // LOADERS
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: [/\.css/, /\.scss/, /\.sass/],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}