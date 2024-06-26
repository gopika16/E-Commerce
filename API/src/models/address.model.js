const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    houseNumber: {
        type: String,
        required: true
    },
    street:{
        type:String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    contact: {
        type: String,
        required: true
    }
});


const Address = mongoose.model("addresses", addressSchema);

module.exports = Address;
