module.exports = class Router {
    constructor(config) {
        this.app = config.app;
        this.session = config.session;
        // CONFIG
        this.app.set('view engine', 'ejs');
        this.app.use(config.express.static('public'));
        this.app.use(config.parser.json());
        this.app.use(config.parser.urlencoded({extended: false}));
    }

    run() {
        // ROUTING
        this.app.get('/', (req, res) => {
            res.render("index", { arr: req.session.lastButton })
        })

        this.app.post('/', (req, res) => {
            (req.session.lastButton == undefined) ? req.session.lastButton = [req.body.letter] : req.session.lastButton.push(req.body.letter);
            res.redirect('/')
        })
    }
}