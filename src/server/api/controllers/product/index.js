'use strict';

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Product = require('../../../DbSchema/productSchema');

module.exports.list = function (req, res) {
	// get 'all items'
	// TODO: add paging; get actual data
	
	var page = req.query.page || 0;
	if(page != 0)
		page -= 1;
	var start = appConfig.PAGE_SIZE * page;
	var end = start + appConfig.PAGE_SIZE;
	var products = [{
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

	var totalCount = products.length;
	var totalPages = Math.ceil(totalCount / appConfig.PAGE_SIZE)
	var results = { 
				totalCount: totalCount,
				totalPages: totalPages,
				products: products.slice(start, end)
			};

	res.json(results);
};

module.exports.detail = function(req, res) {
	var id = req.params.id;
	var _id = new ObjectId(id);
	Product.findById(_id , function(err, product){
		if(err) { console.log('error'); res.json({ error: 'error' }); }
		res.json(product);
	});
};

module.exports.update = function(req, res) {
	var id = req.params.id;
	var json = req.body;
	var _id = new ObjectId(id);

	Product.findByIdAndUpdate(_id, { 
					$set: { 
							name: json.name, 
							price: json.price,
							categoryId: json.categoryId,
							modified: new Date() 
						}
					}, 
					{ new: true }, 
			function(err, product) {
		if(err) { console.log('error: ' + err); res.json({ error: 'error' }); }

		res.json(product);
	});
};

module.exports.new = function(req, res) {
	var product = new Product(req.body);
	product.save(function(err, product){
		if(err) { console.log('error'); res.json({ error: 'error' }); }

		res.json(product);
	});
}