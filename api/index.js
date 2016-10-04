const router = require('express').Router();

router.get('/', function(req, res){
	res.end('Hello from api');
})

router.get('/test', function(req,res){
	res.end('Hello from test');
})

module.exports = router;