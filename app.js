const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");

// Set up the express app
const app = express();
const paths = {
    index: path.resolve(__dirname, 'src/client','index.html'),
    dist: path.resolve(__dirname, 'dist'),
}

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

app.use(express.static(paths.dist))

module.exports = app;
