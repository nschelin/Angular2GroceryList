'use strict';

const mongoose = require('mongoose');
const Objectid = mongoose.Types.Objectid;
const GroceryList = require('../../../DbSchema/groceryListSchema');

module.exports.list = function (req, res) {
	// get 'all items'
	// TODO: add paging; get actual data
	
	var page = req.query.page || 0;
	if(page != 0)
		page -= 1;
	var start = appConfig.PAGE_SIZE * page;
	var end = start + appConfig.PAGE_SIZE;
	
	GroceryList.find({}, function(err, groceryLists) {
		if (err) { console.log(err) }
			
		var totalCount = groceryLists.length;
		var totalPages = Math.ceil(totalCount / appConfig.PAGE_SIZE)
		var results = { 
				totalCount: totalCount,
				totalPages: totalPages,
				groceryLists: groceryLists.slice(start, end)
			};

	res.json(results);


	});
	// var groceryLists = [{ id: 789, 
	// 				 total: 36.85, 
	// 				 subtotal: 33.5, 
	// 				 products: [{
	// 						id: 4567,
	// 						name: 'Milk',
	// 						price: 2.00, 
	// 						categoryid: 1234,
	// 						count: 1
	// 					},
	// 					{
	// 						id: 4568,
	// 						name: 'Steak',
	// 						price: 10.00,
	// 						categoryid: 1235,
	// 						count: 2
	// 				}]
	// 				},
	// 				{ id: 790, 
	// 				 total: 24.20, 
	// 				 subtotal: 22.00, 
	// 				 products: [{
	// 					id: 4567,
	// 					name: 'Milk',
	// 					price: 2.00, 
	// 					categoryid: 1234,
	// 					count: 1
	// 				},
	// 				{
	// 					id: 4568,
	// 					name: 'Steak',
	// 					price: 10.00,
	// 					categoryid: 1235,
	// 					count: 3
	// 				},
	// 				{
	// 					id: 4569,
	// 					name: 'Corn',
	// 					price: 0.50,
	// 					categoryid: 1236,
	// 					count: 3
	// 				}]}
	// 			];

	
};

module.exports.detail = function(req, res) {
	var id = req.body.id;
	// TODO: get item from db
	var mockData = { id: 789, 
					 total: 24.20, 
					 subtotal: 22.00, 
					 products: [{
						id: 4567,
						name: 'Milk',
						price: 2.00, 
						categoryid: 1234,
						count: 1
					},
					{
						id: 4568,
						name: 'Steak',
						price: 10.00,
						categoryid: 1235,
						count: 2
					}] };
	res.json(mockData);
};

module.exports.update = function(req, res) {
	var id = req.body.id;
	var json = req.body;

	// TODO: get item from db and make changes

	res.send(json);
};

module.exports.new = function(req, res) {
	var groceryList = new GroceryList(req.body);

	groceryList.salesTax = appConfig.salesTax;
	groceryList.calculateTotals(function(){
		
		groceryList.save(function(err, groceryList){
			if(err) { console.log('error: ' + err); res.json({ error: 'error' }); }

			res.json(groceryList);
		});	
	});
}