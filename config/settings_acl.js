const Roles = [
    {
        roles: ['guest', 'member'],
        allows: [
            { resources: '/dog', permissions: [ 'get' ] }
        ]
    },
    {
    	roles: ['member'],
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