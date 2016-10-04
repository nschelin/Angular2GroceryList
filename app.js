'use strict';
const express = require('express');
const http = require('http');
const path = require('path');
const routes = require('./routes');
const api = require('./api');
const logger = require('morgan');

let app = express(); 
//let router = express.Router();

app.use(logger('dev'));

app.use('/', routes);
app.use('/api', api);


var server = http.createServer(app);
server.listen(3000);


