const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authenticate.js');
const productController = require('../controller/product.controller.js');

router.get('/', authenticate, productController.getAllProducts);
router.delete('/id/:id', authenticate, productController.deleteProduct);

module.exports = router;
