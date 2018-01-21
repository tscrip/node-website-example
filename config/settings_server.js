/**
 * @name settings_server
 * @description Contains server configuration for application
 */

const Web = {
	Port: 8080,
	Cookie: {
		name: 'sampleApp',
		keys: ['key1','key2'],
		maxAge: 24 * 60 * 60 * 1000 // 24 hours)
	}
};

const Database = {
	ConnectionObject: {
		host     : 'localhost',
		user     : 'root',
		password : 'toor',
		database : 'pets'
	}
};

// Returning Settings
module.exports = {
	Web: Web,
	Database: Database
};