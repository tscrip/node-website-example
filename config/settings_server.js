const Path = require('path');

const Settings = {
	Port: 8080,
	TemplateRoot: Path.join(__dirname, '..', 'templates'),
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