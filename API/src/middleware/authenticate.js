const responseCodes = require('../HttpResponse.js');
const jwtProvider = require('../config/jwtProvider.js');
const userService = require('../services/user.service.js');

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split( ' ' )[1];
        if(!token) {
            return req.status(responseCodes.NOT_FOUND).send({error: 'Token not found'});
        }
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = userService.getUserById(userId);
        req.user = user;
    } catch (error) {
        return res.status(responseCodes.INTERNAL_SERVER_ERROR).send({error: error.message});
    }
    next();
}

module.exports = {
    authenticate
}