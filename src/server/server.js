'use strict';

// makes config available to other modules within
global.appConfig = require('./config');

const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


// route modules
const routes = require('./routes');
const api = require('./api');

var jsPath = path.resolve(__dirname, '../client/app/js');
var cssPath = path.resolve(__dirname, '../client/app/css');
var nodeModules = path.resolve(__dirname, '../../node_modules/')
var angularApp = path.resolve(__dirname, '../client/app');

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
app.use('/node_modules', express.static(nodeModules));
app.use('/app', express.static(angularApp));

// connect to db
mongoose.connect(global.appConfig.databaseUri, function(err) {
	if(err) { console.log('connection error: ' + err) }
	console.log('Connected to Db');
});

var server = http.createServer(app);
server.listen(3000);


