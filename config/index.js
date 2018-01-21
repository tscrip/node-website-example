/**
 * @name index
 * @description Interface to combine config files
 */

const ServerSettings = require('./settings_server');
const QuerySettings = require('./settings_query');
const ACLSettings = require('./settings_acl');
const RouteSettings = require('./settings_route');

// Exporting configuration
module.exports = {
	Web: ServerSettings.Web,
	Database: ServerSettings.Database,
	Query: QuerySettings,
	ACL: ACLSettings,
	Route: RouteSettings
};