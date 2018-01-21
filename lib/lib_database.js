const Mysql = require('mysql');
const Config = require('../config').Database;

// Creating DB Connection
var db = Mysql.createPool(Config.ConnectionObject);

// Getting connection
function getConnection() {

	return new Promise(function (resolve, reject) {
		db.getConnection(function(err, conn){
			if( err ){
				reject(err);
			}

			resolve(conn);
		})
	});
}

// Exporting method
exports.getConnection = getConnection();

/*
// Creating method to get DB connection
exports.getConnection = function(callback) {
	db.getConnection(function(err, conn) {
    	if(err) {
      		return callback(err);
	    }
	    callback(err, conn);
  	});
};

*/