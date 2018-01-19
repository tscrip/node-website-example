const Express = require('express');
const CookieSession = require('cookie-session');
const BodyParser = require('body-parser');
var cookieSession = require('cookie-session');
const Config = require('./config');
const Nunjucks = require('nunjucks');
const Path = require('path');

// Building Express app
const App = Express();

// Configuring Express to host static files
App.use(Express.static('public'));

// Configuring Express to use cookies
App.use(CookieSession(Config.Server.Web.Cookie));

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
	req.session.userId = 'guest1';
	next();
});

// Importing routes
const Routes_Dog = require('./routes/routes_dog');
const Routes_Cat = require('./routes/routes_cat');

// Configuring routes
App.use('/dog', Routes_Dog);
App.use('/cat', Routes_Cat);

App.listen(Config.Server.Web.Port, function(){
	console.log('App listening on port: ' + Config.Server.Web.Port);
});