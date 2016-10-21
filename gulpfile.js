'use strict';

// node
const browserSync = require('browser-sync');
const del = require('del');
//const open = require('open');
const path = require('path');

// gulp
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('./gulp.config')();

// typescript
const tsProject = $.typescript.createProject('tsconfig.json');


gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


gulp.task('serve', ['clean','templates', 'ts'], function(){
	log('starting...');
	var nodeOptions = {
		script: config.server.serve,
		delayTime: 1,
		env: {
			'PORT': config.server.PORT,
			'NODE_ENV': 'dev'
		},
		watch: config.watch
	};

	gulp.watch(config.client.path + '/**/*.ts', ['ts']);

	return $.nodemon(nodeOptions)
			.on('restart', function(){
				log('Node Restarted...');
				setTimeout(function() {
					browserSync.notify('Reloading now...');
					browserSync.reload({ stream: false });
				}, 1000);
			})
			.on('start', function() {
				log('Node Started...');
				//open('http://localhost:' + config.server.bsPORT);
				startBrowserSync();
			})
			.on('crashed', function() {
				log('Node Crashed...');
			})
			.on('end', function() {
				log('Node Ended...');
			})
});

gulp.task('ts', function(){
	return tsProject.src()
					.pipe(tsProject())
					.pipe($.flatten())
					.pipe(gulp.dest(config.client.js));
});

gulp.task('clean', function() {
	var jsPath = path.resolve(__dirname, config.client.js + "/*.js");
	var templatePath = path.resolve(__dirname, './src/client/app/templates/*.*');
	return clean([jsPath, templatePath]);
});

gulp.task('templates', function(){
	var templates = path.resolve(__dirname, "./src/client/app/ts/*/*.html");
	return gulp.src(templates)
			   .pipe($.flatten())
			   .pipe(gulp.dest('./src/client/app/templates/'));
});

// helper functions
////////////////////////////////////////////////////////////////////
function startBrowserSync() {
	log('Starting browser sync on port: ' + config.server.bsPORT);

	var options = {
		port: config.server.bsPORT,
		proxy: 'localhost:' + config.server.PORT,
		files: [ config.client.path, config.server.path ],
		open: "local",
		ghostMode: {
			clicks: true,
			location: true,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'gulp-patterns',
		notify: true,
		reloadDelay: 1000
	};
	browserSync(options);
}

function log(message) {
	if(typeof(message) === 'object') {
		for(let item in message) {
			if(mesage.hasOwnProperty(item)) {
				$.util.log($.util.colors.cyan(message[item]));
			}
		}
	}
	else {
		$.util.log($.util.colors.cyan(message));
	}
}

function clean(path) {
	log('Cleaning: ' + path);
	return del.sync(path);
}