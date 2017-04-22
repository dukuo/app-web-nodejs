const express = require('express');

const app = express();

// Bootstrap app
require('./config/express')(app);
require('./config/mongoose')();
require('./config/routes')(app);

module.exports = app;
