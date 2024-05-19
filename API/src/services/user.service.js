const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error("User already Exists!");
        }

        password = await bcrypt.hash(password, 8);

        const user = await User.create({ firstName, lastName, email, password });

        console.log("New user created", user);

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        // .populate("addresses");
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

        const user = await getUserById(userId);

        if (!user) {
            throw new Error("User not found: ", userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User does not exist with email " + email);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createUser,
    getUserById,
    getUserProfileByToken,
    getUserByEmail,
    getAllUsers,
};
