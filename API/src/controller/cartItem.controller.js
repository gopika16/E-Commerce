const cartItemService = require('../services/cartItem.service.js');
const responseCodes = require('../HttpResponse.js');

const updateCartItem = async(req,res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(responseCodes.SUCCESS).send(updatedCartItem);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const removeCartItem = async(req,res) => {
    const user = req.user;
    try {
        await cartItemService.removeCardItem(user._id, req.params.id);
        return res.status(responseCodes.SUCCESS).send({message: 'Cart Item removed successfully.'});
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    updateCartItem,
    removeCartItem
}