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
			})
			.on('start', function() {
				console.log('Node Started...')
			})
			.on('crashed', function() {
				console.log('Node Crashed...');
			})
			.on('end', function() {
				console.log('Node Ended...');
			})

});