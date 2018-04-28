const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const routers = require("./src/server/routes");
const { sequelize } = require('./src/server/models');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up the express app
const app = express();
const paths = {
    index: path.resolve(__dirname, 'dist','index.html'),
    dist: path.resolve(__dirname, 'dist'),
};

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    store: new SequelizeStore({
        db: sequelize
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true // if you do SSL outside of node.
}));

app.use(express.static(paths.dist))
app.use('/api', routers);
app.get('/*', function (req, res) {
    res.sendFile(paths.index);
});



module.exports = app;
