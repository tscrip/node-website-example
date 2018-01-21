/**
 * @name lib_route
 * @description Build appication routes
 */

// Requiring modules
const Config = require('../config');
const Lib_ACL = require('./lib_acl');

// Requiring controllers
const catController = require('../controllers/catController');
//const dogController = require('../controllers/dogController');

// Getting particular config sections
const Config_Routes = Config.Route;

// Function to build routes
const GetRoutes = function(app){

    // Looping through scopes
    for(var resource=0; resource < Config_Routes.length; resource++){

        // Looping through routes
        for(var route=0; route < Config_Routes[resource].routes.length; route++){
            
            // Creating temp object to hold information
            var props = {
                verb: Config_Routes[resource].routes[route].verb.toLowerCase(),
                controller: Config_Routes[resource].routes[route].controller,
                method: Config_Routes[resource].routes[route].method,
                URI: Config_Routes[resource].routePrefix + Config_Routes[resource].routes[route].URI,
                authRequiredParent: Config_Routes[resource].authRequired,
                authRequiredChild: Config_Routes[resource].routes[route].authRequired
            };

            // Checking if controller is defined
            if(typeof eval(props.controller)[props.method] == 'undefined'){
                console.error('method not present in lib_routes {controller: ' + props.controller + ', method: ' + props.method + '}');
                
                // NEED TO FIX THIS
                process.exit();
            }
            else{
                 // Determining if we need to secure the route
                if(props.authRequiredParent || props.authRequiredChild){

                    // Defining route WITH authentication/authorization
                    app[props.verb](props.URI, Lib_ACL.middleware(), eval(props.controller)[props.method]);
                }
                else{

                    // Defining route WITHOUT authentication/authorization
                    app[props.verb](props.URI, eval(props.controller)[props.method]);
                }
            }
        }
    }
}

// Exporting generated routes
module.exports = GetRoutes;