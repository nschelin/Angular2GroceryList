const router = require('express').Router();

router.get('/', function(req, res){
	res.end('Hello from Root');
});

module.exports = router;