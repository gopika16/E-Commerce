const express = require("express");
const cors = require("cors");
const responseCode = require("./HttpResponse");
const app = express();
const authRouters = require('./routes/auth.route.js');
const userRouters = require('./routes/user.route.js');
const productRouter = require('./routes/product.route.js');
const adminProductRouter = require('./routes/adminProduct.route.js');
const adminOrderRouter = require('./routes/adminOrder.route.js');
const cartRouter = require('./routes/cart.route.js');
const cartItemRouter = require('./routes/cartItem.route.js');
const orderRouter = require('./routes/order.route.js');
const reviewRouter = require('./routes/review.route.js');
const ratingRouter = require('./routes/rating.route.js');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(responseCode.SUCCESS).send({ message: "Welcome to e commerce api - Node", status: true });
});

app.use('/auth', authRouters);
app.use('/api/users', userRouters);
app.use('/api/products', productRouter);
app.use('/api/admin/products', adminProductRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use('/api/cart', cartRouter);
app.use('/api/cart_items', cartItemRouter);
app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/ratings', ratingRouter);

module.exports = app;