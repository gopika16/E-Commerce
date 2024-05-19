const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
const cartItemController = require('../controller/cartItem.controller.js');

router.put('/', authenticate, cartItemController.updateCartItem);