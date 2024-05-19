const Category = require("../models/category.model");

async function createProduct(reqData) {
    const topLevel = await Category.findOne({
        name: reqData.topLevelCategory
    })
}