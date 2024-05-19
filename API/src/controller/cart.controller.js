const cartService = require('../services/cart.service.js');
const responseCodes = require('../HttpResponse.js');

const findUserCart = async(req, res) => {
    const user = req.user;
    try {
        const cart = await cartService.findUserCart(user._id);
        return res.status(responseCodes.SUCCESS).send(cart);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const addCartItem = async(req, res) => {
    const user = req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(responseCodes.SUCCESS).send(cartItem);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    findUserCart,
    addCartItem
};