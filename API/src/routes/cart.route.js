const express = require("express");
const router = express.Router();
const { authenticate } = require('../middleware/authenticate.js');
const cartController = require('../controller/cart.controller.js');

router.get('/', authenticate, cartController.findUserCart);
router.put('/add', authenticate, cartController.addCartItem);

module.exports = router;