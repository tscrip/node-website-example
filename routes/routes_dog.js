const Express = require('express');
const Router = Express.Router();
const Path = require('path');
const Config = require('../config');
const ACL = require('../lib').ACL;


// Building middleware
var CustomMiddleware = function (req, res, next){
	console.log('Visited Dog Root Route');
	next();
}

// This middleware will only run for the following routes
// This middleware will fire for every request
Router.use(CustomMiddleware);

// define the home page route
Router.get('/', ACL.middleware(), function (req, res) {
	//var templatePath = Path.join(Config.Server.TemplateRoot, 'dogs.html');
	res.render('dogs.html');
});

// Exporting routes
module.exports = Router