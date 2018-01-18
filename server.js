const Express = require('express');
const Config = require('./config');
const Nunjucks = require('nunjucks');
const Path = require('path');

// Building Express app
const App = Express();

// Configuring Express
App.use(Express.static('public'));

// Configuring view engine
App.set('view engine', 'html');
Nunjucks.configure(Path.join(__dirname, 'templates'), {
    autoescape: true,
    express: App
});

// Importing routes
const Routes_Dog = require('./routes/routes_dog');
const Routes_Cat = require('./routes/routes_cat');

// Configuring routes
App.use('/dog', Routes_Dog);
App.use('/cat', Routes_Cat);

App.listen(Config.Server.Port, function(){
	console.log('App listening on port: ' + Config.Server.Port);
});