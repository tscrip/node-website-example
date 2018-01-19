const Mysql = require('mysql');
const Config = require('../config');

// Creating DB Connection
var dbConnection = Mysql.createConnection(Config.Server.Database.ConnectionObject);

// Connecting
dbConnection.connect();

// Exporting connection
module.exports = dbConnection;