const express    = require("express");
const app        = express();
const webpack    = require("webpack");
const config     = require("./webpack.config.js");
const compiler   = webpack(config);
const Router     = require("./config/routes.js");
const bodyParser = require("body-parser");

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);

app.use(webpackDevMiddleware);

new Router({
    app: app,
    express: express,
    parser: bodyParser
}).run();
app.listen(8080);