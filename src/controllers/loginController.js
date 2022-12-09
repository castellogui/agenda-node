const { authUserByEmailAndPassword, getTokenJWT } = require('../services/loginService')

exports.Login = async (req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    let auth = await authUserByEmailAndPassword(email, password)
    console.log(auth)
    res.send(await authUserByEmailAndPassword())
};