const Path = require('path');

const Settings = {
	Web: {
		Port: 8080,
		Cookie: {
			name: 'sampleApp',
  			keys: ['key1','key2'],
  			maxAge: 24 * 60 * 60 * 1000 // 24 hours)
 		}
	},
	Database: {
		ConnectionObject: {
			host     : 'db4free.net',
			user     : 'turtleuser1',
			password : 'turtlepassword',
			database : 'petstestingdb'
		}
	}
};

// Returning Settings
module.exports = Settings;