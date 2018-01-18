const Queries = {
	// Each entity is listed here
	Dog: {
		'GetAllDog': 'SELECT * FROM Dogs',
		'GetADog': 'SELECT * FROM Dogs WHERE id = ?'
	},
	Cat: {
		'GetAllCat': 'SELECT * FROM Cats',
		'GetACat': 'SELECT * FROM Cat WHERE id = ?'
	}
}

// Returning Queries
module.exports = Queries;