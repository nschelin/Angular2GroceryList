const router = require('express').Router();
const CategoryController = require('./controllers/category');
const ProductController = require('./controllers/product');
const GroceryListController = require('./controllers/grocerylist');

router.get('/', function(req, res){
	res.end('Hello from api');
})

router.get('/category', CategoryController.list);
router.post('/category',CategoryController.new);
router.put('/category/:id', CategoryController.update);
router.get('/category/:id', CategoryController.detail);

router.get('/product', ProductController.list);
router.post('/product',ProductController.new);
router.put('/product/:id', ProductController.update);
router.get('/product/:id', ProductController.detail);

router.get('/grocerylist', GroceryListController.list);
router.post('/grocerylist',GroceryListController.new);
router.put('/grocerylist/:id', GroceryListController.update);
router.get('/grocerylist/:id', GroceryListController.detail);



module.exports = router;