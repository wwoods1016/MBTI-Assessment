// Dependencies
const path = require('path');

// Routes
module.exports = app => {

	// Main
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Questions
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};
