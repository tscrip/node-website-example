const Express = require('express');
const Router = Express.Router();
const Config = require('../config');
//const DBConnection = require('../database');


// Building middleware
var CustomMiddleware = function (req, res, next){
	console.log('Visited Cat Root Route');
	next();
}

// This middleware will only run for the following routes
// This middleware will fire for every request
Router.use(CustomMiddleware);

// define the home page route
Router.get('/', function (req, res) {

	var results = [
	{
		id: 1,
		name: 'Spot',
		favorite_color: 'blue'
	},
	{
		id: 2,
		name: 'Rover',
		favorite_color: 'red'
	}
	];

	// Passing results into template
	res.render('cats.html', {cats: results});

	/*
	// Running Query
	DBConnection.query(Config.Query.Cat.GetAllCat, function(error, results, fields){
		if (error) throw error;

		// Passing results into template
		res.render('cats.html', results);
	})
	*/
});

// Exporting routes
module.exports = Router