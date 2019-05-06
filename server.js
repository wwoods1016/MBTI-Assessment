// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require(path.join(__dirname, './app/routing/api-routes.js'))(app);
require(path.join(__dirname, './app/routing/html-routes.js'))(app);

// Starts server
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});