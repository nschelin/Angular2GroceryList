'use strict';

// node
const browserSync = require('browser-sync');
const del = require('del');
//const open = require('open');
const path = require('path');
const merge = require('merge2')


// gulp
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('./gulp.config')();

// typescript
const tsProject = $.typescript.createProject('tsconfig.json', { declaration: true });


gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


gulp.task('serve:dev', ['clean', 'ts', 'templates', 'spa', 'sysjs', 'css'], function(){
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

// TODO: ISSUES FIX!
gulp.task('ts', function(){
	var tsResult = tsProject.src()
					.pipe($.sourcemaps.init())
					.pipe(tsProject())
	return merge([
		tsResult.dts.pipe(gulp.dest('./build/app/def')),
		tsResult.js.pipe($.sourcemaps.write()).pipe(gulp.dest('./build/app/js'))
	]);
					
});

// gulp.task('server', function() {
// 	return gulp.src('./src/server/**')
// 				.pipe(gulp.dest('./build/server'));
// })

gulp.task('clean', function() {
	return clean('./build');
});

gulp.task('templates', function(){
	return gulp.src('./src/client/app/ts/**/*.html')
				.pipe(gulp.dest('./build/app/js'));
})

gulp.task('css', function() {
	return gulp.src(['./src/client/app/css/**/*.css'])
			.pipe(gulp.dest('./build/app/css'));
});

gulp.task('sysjs', function() {
	return gulp.src(['./src/client/app/systemjs.config.js'])
			.pipe(gulp.dest('./build/app/'));
});

gulp.task('spa', function(){
	return gulp.src(['./src/client/index.html'])
			.pipe(gulp.dest('./build'));
});

// helper functions
////////////////////////////////////////////////////////////////////
function startBrowserSync() {
	log('Starting browser sync on port: ' + config.server.bsPORT);

	var options = {
		port: config.server.bsPORT,
		proxy: 'localhost:' + config.server.PORT,
		files: [ config.client.path ],
		open: false,
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