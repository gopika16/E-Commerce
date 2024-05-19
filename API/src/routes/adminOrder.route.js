const express = require("express");
const router = express.Router();
const adminOrderController = require('../controller/adminOrder.controller.js');
const authenticate = require('../middleware/authenticate.js');

router.get('/', authenticate, adminOrderController.getAllOrders);
router.put('/:orderId/confirmed', authenticate, adminOrderController.confirmOrder);
router.put('/:orderId/shipped', authenticate, adminOrderController.shippedOrder);
router.put('/:orderId/delete', authenticate, adminOrderController.deleteOrder);
router.put('/:orderId/deliver', authenticate, adminOrderController.deliverOrder);
router.put('/:orderId/cancel', authenticate, adminOrderController.cancelOrder);

module.exports = router;