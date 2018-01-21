// Requiring modules
var DB = require('../lib/lib_database');
const Config = require('../config');

/**
 * @function getCats
 * @description Get cats and renders view
 * @param {string} req - Contains request object
 * @param {string} res - Contains response object
 */
var getCats = function (req, res) {

	// Fetching DB connection
	DB.getConnection.then(function(conn){

		// Using connection to run query
		conn.query(Config.Query.Cat.GetAllCat, function(error, results, fields){

			// Checking if query failed
			if (error) console.log(error);

			// Closing connection
			conn.release();

			// BUSINESS LOGIC GOES HERE

			// Passing results into template
			res.render('cats.html', {results: results});

		});
	}).catch(function (err){
		console.log(err);
	});
};

// Exporting methods
module.exports = {
    getCats: getCats
};