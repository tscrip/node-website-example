const Mysql = require('mysql2/promise');
const Config = require('../config').Database;

// Creating DB Connection
var pool;

module.exports.getConnection = function() {
	return new Promise(function (resolve, reject) {
		if(!pool){
			console.log("Creating MySQL Pool");
			pool = Mysql.createPool(Config.ConnectionObject);
		}

		try{
			resolve(pool.getConnection());
		}
		catch(err){
			reject(err);
		}
	});
};

/*
// Creating getConnection function
function getConnection(){
	if (connection) {
		return connection;
	}
	
	connection = Mysql.createConnection(Config.ConnectionObject);
	return connection;
}


// Exporting method



// Exporting method
exports.getConnection = async function () {
	return new Promise(function (resolve, reject) {
		try{
			resolve(Mysql.createConnection(Config.ConnectionObject));
		}
		catch (e){
			reject(e);
		}
	});
}
//exports.DB = db;

// Creating method to get DB connection
module.exports.getConnection = async function() {
	return new Promise(function (resolve, reject) {
		try{
			resolve(db.getConnection());
		}
		catch(err){
			reject(err);
		}
	});
};
*/