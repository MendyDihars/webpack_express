const express  = require("express");
const app      = express();
const webpack  = require("webpack");
const config   = require("./webpack.config.js");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);


app.use(webpackDevMiddleware);
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (res, req) => {
    req.render("index")
})


app.listen(8080)