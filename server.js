const Express = require('express');
const CookieSession = require('cookie-session');
const BodyParser = require('body-parser');
var cookieSession = require('cookie-session');
const Config = require('./config');
const Nunjucks = require('nunjucks');
const Path = require('path');
const Lib_Route = require('./lib/lib_route');

// Building Express app
const App = Express();

// Configuring Express to host static files
App.use(Express.static('public'));

// Configuring Express to use cookies
App.use(CookieSession(Config.Web.Cookie));

// Configuring Express to parse body
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

// Configuring view engine
App.set('view engine', 'html');
Nunjucks.configure(Path.join(__dirname, 'templates'), {
    autoescape: true,
    express: App
});

// Using middleware to dummy up data
App.use(function(req, res, next){
	req.session.userId = 'guest';
	next();
});

// Importing routes
Lib_Route(App);

App.listen(Config.Web.Port, function(){
	console.log('App listening on port: ' + Config.Web.Port);
});