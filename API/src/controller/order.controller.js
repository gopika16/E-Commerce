const orderService = require('../services/order.service.js');
const responseCodes = require('../HttpResponse.js');

const createOrder = async(req, res) => {
    const user = req.user;
    try {
        let createdOrder = orderService.createOrder(user, req.body);
        return res.status(responseCodes.CREATED).send(createdOrder);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const findOrderById = async(req, res) => {
    const orderId = req.params.id;
    try {
        let order = orderService.findOrderById(orderId);
        return res.status(responseCodes.SUCCESS).send(order);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const userOrderHistory = async(req, res) => {
    const user = req.user;
    try {
        let orderHistory = orderService.userOrderHistory(user._id);
        return res.status(responseCodes.SUCCESS).send(orderHistory);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    createOrder,
    findOrderById,
    userOrderHistory
};