const { authUserByEmailAndPassword, getTokenJWT } = require('../services/loginService')

exports.Login = async (req, res, next) => {
    try {
        let email = req.body.email
        let password = req.body.password
        let userStatus = await authUserByEmailAndPassword(email, password)
        if (userStatus.auth === true) {
            res.status(200).send({ status: 200, message: 'User succefully authenticated.', email: userStatus.email, token: getTokenJWT(email) })
        } else {
            res.status(401).send({ status: 401, message: 'User not authenticated.' })
        }
    } catch (err) {
        return { message: 'There was an error while trying to auth user.', err }
    }
};