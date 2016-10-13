'use strict';
// uses global.appConfig

let db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/GroceryListDb', function(err, database) {
	if(!err) {
		console.log('Connected to Db');
		db = database;
	}
})


module.exports.list = function (req, res) {
	// get 'all items'
	// TODO: add paging; get actual data
	
	var page = req.query.page || 0;
	if(page != 0)
		page -= 1;
	var start = appConfig.PAGE_SIZE * page;
	var end = start + appConfig.PAGE_SIZE;
	var categories = [ {
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

	var totalCount = categories.length;
	var totalPages = Math.ceil(totalCount / appConfig.PAGE_SIZE)
	var results = { 
				totalCount: totalCount,
				totalPages: totalPages,
				categories: categories.slice(start, end)
			};

	res.json(results);
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
	var category = req.body;
	category.created = new Date();
	category.modified = new Date();
	// TODO: create item and save to db
	
	let collection = db.collection('category');
	collection.insertOne(category, function(err, result){
		if(!err) {
			console.log('Success!');
			res.json(result.ops[0]);
		}
		else {
			res.json(category);		
		}
	});
}