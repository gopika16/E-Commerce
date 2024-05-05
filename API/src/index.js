const express = require("express");
const cors = require("cors");
const responseCode = require("./HttpResponse");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(responseCode.SUCCESS).send({ message: "Welcome to e commerce api - Node", status: true });
});

module.exports = app;