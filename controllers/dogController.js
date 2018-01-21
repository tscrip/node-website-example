const Express = require('express');
const Router = Express.Router();
const Path = require('path');
const Config = require('../config');
const ACL = require('../lib').ACL;
//const DBConnection = require('../lib').Database;


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
	/*
	// Running Query
	DBConnection.query(Config.Query.Cat.GetAllCat, function(error, results, fields){
		if (error) throw error;

		// Passing results into template
		res.render('cats.html', results);
	})
	*/

	res.render('dogs.html');
});

// Exporting routes
module.exports = Router