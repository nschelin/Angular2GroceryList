
module.exports.list = function (req, res) {
	// get 'all items'
	// TODO: add paging; get actual data
	
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
};

module.exports.detail = function(req, res) {
	var id = req.body.id;
	// TODO: get item from db
	var mockData = { id: 1234, name: "Dairy" };
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