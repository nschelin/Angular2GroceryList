var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
	id: ObjectId,
	name: String,
	created: { type: Date, default: Date.now },
	modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', CategorySchema);