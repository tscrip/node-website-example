/**
 * @name settings_acl
 * @description ACLs config for application
 */

const Roles = [
    {
        roles: ['guest', 'member'],
        allows: [
            { resources: '/dog', permissions: [ 'get' ] }
        ]
    },
    {
    	roles: ['guest'],
    	allows: [
    		{ resources: '/cat', permissions: [ 'get', 'post', 'put', 'delete' ] }
    	]
    }
];

const Users = [
	
];

// Returning ACLs
module.exports = {
	Roles: Roles,
	Users: Users
};