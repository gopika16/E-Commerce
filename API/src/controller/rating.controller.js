const ratingService = require('../services/rating.service.js');
const responseCodes = require('../HttpResponse.js');

const createRating = async(req, res) => {

    const user = req.user;
    try {
        const review = ratingService.createRating(req.body, user);
        return res.status(responseCodes.CREATED).send(review);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const getProductRating = async(req, res) => {

    const productId = req.params.id;
    try {
        const review = ratingService.getProductRating(productId);
        return res.status(responseCodes.SUCCESS).send(review);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    createRating,
    getProductRating
}