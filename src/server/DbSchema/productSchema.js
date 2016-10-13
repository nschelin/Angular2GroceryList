var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
	id: ObjectId,
	name: String,
	price: Number,
	created: { type: Date, default: Date.now },
	modified: { type: Date, default: Date.now },
	categoryId: ObjectId
});

module.exports = mongoose.model('Product', ProductSchema);