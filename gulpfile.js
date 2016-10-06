const browserSync = require('browser-sync');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);


gulp.task('serve', function(){
	var nodeOptions = {
		script: './src/server/server.js',
		delayTime: 1,
		env: {
			'PORT': 5000,
			'NODE_ENV': 'dev'
		},
		watch: ['./src/']
	};
	return $.nodemon(nodeOptions)
			.on('restart', function(){
				console.log('Node Restarted...');
				setTimeout(function() {
					browserSync.notify('Reloading now...');
					browserSync.reload({ stream: false });
				}, 1000);
			})
			.on('start', function() {
				console.log('Node Started...');
				startBrowserSync();
			})
			.on('crashed', function() {
				console.log('Node Crashed...');
			})
			.on('end', function() {
				console.log('Node Ended...');
			})
});

// helper functions

function startBrowserSync() {
	var port = 5000;
	console.log('Starting browser sync on port: ' + port);

	var options = {
		proxy: 'localhost:' + port,
		files: [ './src/client/', './src/server/'],
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