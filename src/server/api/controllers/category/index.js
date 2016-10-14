'use strict';
// uses global.appConfig
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Category = require('../../../DbSchema/categorySchema');

module.exports.list = function (req, res) {
	// get 'all items'
	var page = req.query.page || 0;
	if(page != 0)
		page -= 1;
	
	var start = appConfig.PAGE_SIZE * page;
	var end = start + appConfig.PAGE_SIZE;
	
	Category.find({}, function(err, categories){
		if(err) { console.log('error'); res.json({ error: 'error' }); }

		var totalCount = categories.length;
		var totalPages = Math.ceil( totalCount / appConfig.PAGE_SIZE );
		var results = {
			totalCount: totalCount,
			totalPages: totalPages,
			categories: categories.slice(start, end)
		}
		res.json(results);
	});
};

module.exports.detail = function(req, res) {
	var id = req.params.id;
	var _id = new ObjectId(id);

	Category.findById(_id , function(err, category){
		if(err) { console.log('error'); res.json({ error: 'error' }); }
		res.json(category);
	});
};

module.exports.update = function(req, res) {
	var id = req.params.id;
	var json = req.body;
	var _id = new ObjectId(id);

	Category.findByIdAndUpdate(_id, { $set: { name: json.name, modified: new Date() }}, { new: true }, function(err, category) {
		if(err) { console.log('error'); res.json({ error: 'error' }); }

		res.json(category);
	});
};

module.exports.new = function(req, res) {
	var category = new Category(req.body);
	category.save(function(err, category){
		if(err) { console.log('error'); res.json({ error: 'error' }); }

		res.json(category);
	});
}


/*
	Old mongoose code for update
*/ 

	// Category.findById(id, function(err, category){
	// 	if(err) { console.log('error'); res.json({ error: 'error' }); }

	// 	category.name = json.name;
	// 	category.modified = new Date();

	// 	category.save().then(function(category){
	// 		res.send(category);	
	// 	})
	// });


/*
	Old mongodb driver code
 */

	// let db;
	// const MongoClient = require('mongodb').MongoClient;
	// MongoClient.connect('mongodb://localhost:27017/GroceryListDb', function(err, database) {
	// 	if(!err) {
	// 		console.log('Connected to Db');
	// 		db = database;
	// 	}
	// })

 	// new
	// var categoryRaw = req.body;
	// categoryRaw.created = new Date();
	// categoryRaw.modified = new Date();

	// let categoryCollection = db.collection('category');
	// categoryCollection.insertOne(category, function(err, result){
	// 	if(!err) {
	// 		console.log('Success!');
	// 		res.json(result.ops[0]);
	// 	}
	// 	else {
	// 		res.json(category);		
	// 	}
	// });
	// 

	// list
	// 	let categoryCollection = db.collection('category');
	// let categories = [];
	// categoryCollection.find().toArray(function(err, documents){
	// 	if(!err) {
	// 		categories = documents;
	// 		var totalCount = categories.length;
	// 		var totalPages = Math.ceil(totalCount / appConfig.PAGE_SIZE)
	// 		var results = { 
	// 					totalCount: totalCount,
	// 					totalPages: totalPages,
	// 					categories: categories.slice(start, end)
	// 				};

	// 		res.json(results);
	// 	}
	// 	else {
	// 		res.json({ error: 'error' });
	// 	}
	// });