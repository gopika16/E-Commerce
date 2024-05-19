const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate.js');
const reviewController = require('../controller/review.controller.js');

router.post('/create', authenticate, reviewController.createReview);
router.get('/product/:productId', authenticate, reviewController.getAllReviews);

module.exports = router;
