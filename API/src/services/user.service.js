const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error("Email is already Registered!");
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({ firstName, lastName, email, password });

        console.log("New user created", user);

        return user;

    } catch (error) {
        throw new Error(error.message);
    }
};

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId).populate("address");
        if (!user) {
            throw new Error("User not found with Id : ", userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserProfileByToken = async (token) => {
    try {
        const userId = await jwtProvider.getUserIdFromToken(token);

        const user = await findUserById(userId);

        if (!user) {
            throw new Error("User not found: ", userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { createUser, findUserById, getUserProfileByToken };
