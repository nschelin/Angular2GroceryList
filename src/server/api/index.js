const router = require('express').Router();

router.get('/', function(req, res){
	res.end('Hello from api');
})

router.get('/category', function(req, res) {
	// get 'all items'
	// TODO: add paging
	
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
	// TODO: get item from db
	var mockData = { id: 1234, name: "Dairy" };
	res.json(mockData);

});

router.put('/category/:id', function(req, res){
	var id = req.body.id;
	var json = req.body;

	// TODO: get item from db and make changes

	res.send(json);
})

router.post('/category',function(req, res) {
	var json = req.body;

	// TODO: create item and save to db

	res.json(json);
})

// router.get('/test', function(req,res){
// 	res.end('Hello from test');
// })

module.exports = router;