// Dependencies
const path = require('path');

const types = require('../data/types.js');

// Routes
module.exports = app => {

	// All entries
	app.get('/api/types', (req, res) => {
		res.json(types);
	});

	// Add new user entry
	app.post('/api/types', (req, res) => {
		
		const userInput = req.body;
		const userResponses = userInput.scores;

		// Find match variables
		let matchName = '';
		let matchImage = '';
		let totalDifference = 9999;

		// Loop through all entries
		for (let i = 0; i < types.length; i++) {

			// Loop through each question
			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(types[i].scores[j] - userResponses[j]);
			}

			// Matches with 
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = types[i].name;
				matchImage = types[i].photo;
			}
		}

		// Add new user
		types.push(userInput);

		// Send response
		res.json({
			status: 'OK',
			matchName,
			matchImage
		});
	});
};
