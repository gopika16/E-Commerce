const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const responseCode = require("../HttpResponse.js");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await CartService.createCart(user);

        return res.status(responseCode.SUCCESS).send({ jwt, message: "Registration Successful !!" });
    } catch (error) {
        return res.status(responseCode.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;

    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(responseCode.NOT_FOUND).send({ message: " User not found." });
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            return res.status(responseCode.UNAUTHORIZED).send({ message: "Invalid Password !" });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(responseCode.SUCCESS).send({ jwt, message: "Login Successful !!" });
    } catch (error) {
        return res.status(responseCode.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

module.exports = { login, register }
