/**
 * @name route
 * @description Contains routes for application
 */


const routeConfig = [
    /*
    {
        resource: 'dog', // Documentation
        description: 'Routes for dog entity',
        routePrefix: '/dog',
        authRequired: true,
        routes: [
            {
                name: 'Get Dogs',
                description: 'Gets dogs with information from database',
                controller: 'dogController',
                method: 'getDogs',
                verb: 'GET',
                URI: '/',
                authRequired: null
            }
        ]

    },
    */
    {
        resource: 'cat', // Documentation
        description: 'Routes for cat entity',
        routePrefix: '/cat',
        authRequired: true,
        routes: [
            {
                name: 'Get Cats',
                description: 'Gets cats with information from database',
                controller: 'catController',
                method: 'getCats',
                verb: 'GET',
                URI: '/',
                authRequired: null
            }
        ]

    }
]

// Exporting routes
module.exports = routeConfig;