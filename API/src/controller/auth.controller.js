const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const responseCode = require("../HttpResponse.js");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        // await CartService.createCart(user);

        return res.status(200).send({ jwt, message: "Registration Successful !!" });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {

    const { password, email } = req.body;

    try {

        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(responseCode.NOT_FOUND).send({ message: " User not found." });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

