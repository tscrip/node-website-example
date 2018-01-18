const ServerSettings = require('./settings_server');
const QuerySettings = require('./settings_query');
const ACLSettings = require('./settings_acl');

// Exporting configuration
module.exports = {
	Server: ServerSettings,
	Query: QuerySettings,
	ACL: ACLSettings
};