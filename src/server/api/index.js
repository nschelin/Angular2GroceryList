const router = require('express').Router();

router.get('/', function(req, res){
	res.end('Hello from api');
})

router.get('/category', function(req, res) {
	// get 'all items' - add paging
	
	var mockData = [{
						id: 1234,
						name: 'Dairy'
					},
					{
						id: 1235,
						name: 'Meat'
					},
					{
						id: 1236,
						name: 'Produce'
					}];
	res.json(mockData);
})

router.get('/category/:id', function(req, res){
	var id = req.body.id;
	// get item from db
	var mockData = { id: 1234, name: "Dariy" };
	res.json(mockData);

});


router.post('/category',function(req, res) {
	var json = req.body;

	// save to db

	res.json({ ok: true });
})

// router.get('/test', function(req,res){
// 	res.end('Hello from test');
// })

module.exports = router;