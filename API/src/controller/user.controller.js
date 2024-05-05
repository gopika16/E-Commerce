const userService = require('../services/user.service.js');
const responseCodes = require('../HttpResponse.js');

const getuserProfile = async(req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        if(!jwt) {
            return res.status(404).send({error: 'Token not found.'});
        }

        const user = await userService.getUserProfileByToken(jwt);

        return res.status(responseCodes.SUCCESS).send(user);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
};

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(responseCodes.SUCCESS).send(users);
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error:error.message});
    }
};

module.exports = {
    getuserProfile,
    getAllUsers
};