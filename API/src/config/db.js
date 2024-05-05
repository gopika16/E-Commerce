const  mongoose = require("mongoose")

const mongoDBUrl = "mongodb+srv://ecom1630:RZqpnMpvNGIebBsq@cluster0.6148cj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(mongoDBUrl)
}

module.exports = {connectDb}
