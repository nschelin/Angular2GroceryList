const router = require('express').Router();
const path = require('path');
router.get('/', function(req, res) {
	var page = path.resolve(__dirname, '../../client/index.html');
	res.sendFile(page);
});

module.exports = router;