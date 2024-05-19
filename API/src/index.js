const express = require("express");
const cors = require("cors");
const responseCode = require("./HttpResponse");
const app = express();
const authRouters = require('./routes/auth.route.js');
const userRouters = require('./routes/user.route.js');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(responseCode.SUCCESS).send({ message: "Welcome to e commerce api - Node", status: true });
});

app.use('/auth', authRouters);
app.use('/api/users', userRouters);

module.exports = app;