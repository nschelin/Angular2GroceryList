
module.exports.list = function (req, res) {
	// get 'all items'
	// TODO: add paging; get actual data
	
	var mockData = [{
						id: 4567,
						name: 'Milk',
						price: 2.00, 
						categoryid: 1234
					},
					{
						id: 4568,
						name: 'Steak',
						price: 10.00,
						categoryid: 1235
					},
					{
						id: 4569,
						name: 'Corn',
						price: 0.50,
						categoryid: 1236
					}];
	res.json(mockData);
};

module.exports.detail = function(req, res) {
	var id = req.body.id;
	// TODO: get item from db
	var mockData = { id: 4567, name: "Milk", price: 2.00, categoryid: 1234 };
	res.json(mockData);
};

module.exports.update = function(req, res) {
	var id = req.body.id;
	var json = req.body;

	// TODO: get item from db and make changes

	res.send(json);
};

module.exports.new = function(req, res) {
	var json = req.body;

	// TODO: create item and save to db

	res.json(json);

}