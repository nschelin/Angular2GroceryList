'use strict';

// makes config available to other modules within
global.appConfig = require('./config');

const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// route modules
const routes = require('./routes');
const api = require('./api');

var jsPath = path.resolve(__dirname, './src/client/app/js');
var cssPath = path.resolve(__dirname, './src/client/app/css');


let app = express(); 

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/', routes);
app.use('/api', api);
app.use('/js', express.static(jsPath));
app.use('/css', express.static(cssPath));

var server = http.createServer(app);
server.listen(5000);


