const orderService = require('../services/order.service.js');
const responseCodes = require('../HttpResponse.js');

const getAllOrders = async(req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(responseCodes.SUCCESS).send(orders);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}
const confirmOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const updatedOrder = await orderService.confirmOrder(orderId);
        return res.status(responseCodes.SUCCESS).send(updatedOrder);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}
const shippedOrder = async(req, res) => {

    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shippedOrder(orderId);
        return res.status(responseCodes.SUCCESS).send(orders);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}
const deliverOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);
        return res.status(responseCodes.SUCCESS).send(orders);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const cancelOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(responseCodes.SUCCESS).send(orders);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const deleteOrder = async(req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(responseCodes.SUCCESS).send(orders);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    getAllOrders,
    confirmOrder,
    shippedOrder,
    deliverOrder,
    cancelOrder,
    deleteOrder
};