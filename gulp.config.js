module.exports = function() {
	var src = './src';
	var serverPath = src + '/server';
	var clientPath = src + '/client';
	var appPath = clientPath + '/app';

	var config = {
		client: {
			path: clientPath,
			js: appPath + "/js"
		},
		server: {
			path: serverPath,
			serve: serverPath + '/server.js',
			PORT: 3000,
			bsPORT: 5000
		},
		watch: [src]
	};
	return config;
}