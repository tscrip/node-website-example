// Requiring modules
var DB = require('../lib/lib_database');
const Config = require('../config');

/**
 * @function getCats
 * @description Get cats and renders view
 * @param {string} req - Contains request object
 * @param {string} res - Contains response object
 */
var getCats = async function (req, res) {

	try{
		// Fetching DB client
		var connection = await DB.getConnection();
		var [rows, fields] = await connection.query(Config.Query.Cat.GetAllCat);
	 	await connection.release();

		// BUSINESS LOGIC GOES HERE

		// Passing results into template
		res.render('cats.html', {results: rows});
	}
	catch(e){
		console.log("Caught Exception: " + e);

		// Rendering 404
		res.status(404).send("404");
	}
	

	/*

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
	*/
};

// Exporting methods
module.exports = {
    getCats: getCats
};