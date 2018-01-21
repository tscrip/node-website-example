/**
 * @name settings_query
 * @description Contains queries for application
 */

const Queries = {
	// Each entity is listed here
	Dog: {
		GetAllDog: 'SELECT * FROM Dog',
		GetADog: 'SELECT * FROM Dog WHERE id = ?'
	},
	Cat: {
		GetAllCat: 'SELECT * FROM Cat',
		GetACat: 'SELECT * FROM Cat WHERE id = ?'
	}
}

// Returning Queries
module.exports = Queries;