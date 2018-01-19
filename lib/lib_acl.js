// Requiring modules
var acl = require('acl');
const Config_ACL = require('../config').ACL;

// Creating new instance of ACL in Memory
acl = new acl(new acl.memoryBackend());

// Configuring ACL with Roles
acl.allow(Config_ACL.Roles);

// Adding user to ACL
acl.addUserRoles('guest', 'guest');

// Building custom Express middleware
acl.middle = function () {

	return function(req, res, next){

		// Creating variables
		const user = req.session.userId ? req.session.userId : 'anonymous';
		const url = req.originalUrl.split('?')[0];
		const method = req.method.toLowerCase();

		// Checking if user has access to resource
		acl.isAllowed(user, url, method, function(err, allowed){

			// Checking if err
			if(allowed){
				return next();
			}
			else{
				console.log( user + ' attempted to access ' + method + ':' + url );
				return res.status(403).send( 'You are not permitted to perform this action.' );
			}
		});
	}	
}

// Exporting ACL object
module.exports = acl;