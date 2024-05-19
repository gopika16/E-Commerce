const productService = require('../services/product.service.js');
const responseCodes = require('../HttpResponse.js');

const createProduct = async(req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(responseCodes.CREATED).send(product);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const deleteProduct = async(req, res) => {

    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(responseCodes.SUCCESS).send(product);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const updateProduct = async(req, res) => {

    const productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(responseCodes.SUCCESS).send(product);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const findProductById = async(req, res) => {

    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(responseCodes.SUCCESS).send(product);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const getAllProducts = async(req, res) => {
    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(responseCodes.SUCCESS).send(products);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

const createMultipleProducts = async(req, res) => {
    try {
        const products = await productService.createMultipleProducts(req.body);
        return res.status(responseCodes.SUCCESS).send({message: 'Products created Successfully'});
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts
}