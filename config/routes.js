module.exports = class Router {
    constructor(config) {
        this.app = config.app;
        // CONFIG
        this.app.set('view engine', 'ejs');
        this.app.use(config.express.static('public'));
        this.app.use(config.parser.json())
        this.app.use(config.parser.urlencoded({extended: false}))
    }

    run() {
        // ROUTING
        this.app.get('/', (req, res) => {
            res.render("index", { value: req.query })
        })

        this.app.post('/', (req, res) => {
            res.redirect('/?integer=' + req.body.integer)
        })
    }
}