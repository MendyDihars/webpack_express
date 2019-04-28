const express    = require("express");
const app        = express();
const webpack    = require("webpack");
const config     = require("./webpack.config.js");
const compiler   = webpack(config);
const Router     = require("./config/routes.js");
const bodyParser = require("body-parser");
const session    = require("express-session");

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);

app.use(webpackDevMiddleware);
app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

new Router({
    app: app,
    express: express,
    parser: bodyParser
}).run();
app.listen(8080);