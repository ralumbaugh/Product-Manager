const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    // app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.showAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.showOneProduct);
}