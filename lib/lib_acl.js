// Requiring modules
var acl = require('acl');
const Config_ACL = require('../config').ACL;

// Creating new instance of ACL in Memory
acl = new acl(new acl.memoryBackend());

// Configuring ACL with Roles
acl.allow(Config_ACL.Roles);

// Adding user to ACL
acl.addUserRoles('guest', 'guest');

// Exporting ACL object
module.exports = acl;