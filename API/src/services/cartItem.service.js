const CartItem = require('../models/cartItem.model');
const userService = require('../services/user.service.js');

async function updateCartItem(userId, cartitemId, cartItemData) {
    try {
        const cartItem = await findCartItemById(cartitemId);
        const user = await userService.getUserById(cartItem.userId);
        if(!cartItem) {
            throw new Error('Cart Item not found : ', cartitemId);
        }
        if(!user) {
            throw new Error('User not found : ', userId);
        }

        if(user._id.toString === userId.toString) {
            cartItem.quantity = cartItemData.quantity;
            cartItem.price = cartItem.quantity * cartItem.product.price;
            cartItem.discountedPrice = cartItem.quantity * cartItem.product.discountedPrice;
            const updatedCartItem = await cartItem.save();
            return updatedCartItem;
        } else {
            throw new Error('Cannot update this cart item');
        }
    } catch (error) {
        throw new Error(error.message);        
    }
}

async function removeCardItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.getUserById(userId);


    if(user._id.toString === cartItem.userId.toString) {
        await CartItem.findByIdAndDelete(cartItemId);
    } else {
        throw new Error("You cannot remove another User's Item");
    }

}

async function findCartItemById(cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    if(cartItem) {
        return cartItem;
    } else {
        throw new Error('Cart Item not found : ', cartItemId);
    }
}

module.exports = {
    updateCartItem,
    removeCardItem,
    findCartItemById
}