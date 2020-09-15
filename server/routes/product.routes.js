const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/all', ProductController.getAllProducts);
    app.get('/api/details/:id', ProductController.getOneProduct);
}