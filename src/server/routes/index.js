const router = require('express').Router();
const path = require('path');
router.get('/', function(req, res) {
	var page = path.resolve(__dirname, '../../../build/index.html');
	res.sendFile(page);
});

module.exports = router;