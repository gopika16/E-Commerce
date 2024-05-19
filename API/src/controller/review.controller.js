const reviewService = require('../services/review.service.js');
const responseCodes = require('../HttpResponse.js');

const createReview = async(req, res) => {

    const user = req.user;
    try {
        const review = reviewService.createReview(req.body, user);
        return res.status(responseCodes.CREATED).send(review);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const getAllReviews = async(req, res) => {

    const productId = req.params.id;
    try {
        const reviews = reviewService.getAllReviews(productId);
        return res.status(responseCodes.SUCCESS).send(reviews);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    createReview,
    getAllReviews
}