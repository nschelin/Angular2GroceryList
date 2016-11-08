var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var GroceryListSchema = new Schema({
	id: ObjectId,
	total: { type: Number, default: 0 },
	subTotal: { type: Number, default: 0 },
	salesTax: { type: Number, default: 0.1 },
	products: [{ }],
	// products: [{ productId: ObjectId, count: { type: Number: default: 0} }],
	created: { type: Date, default: Date.now },
	modified: { type: Date, default: Date.now }
});

GroceryListSchema.methods.calculateTotals = function(cb) {
	var self = this;
	self.products.forEach(function(product){
		self.subTotal += product.price * product.count;
	});

	self.total = self.subTotal + (self.subTotal * self.salesTax);

	cb();
};

module.exports = mongoose.model('GroceryList', GroceryListSchema);