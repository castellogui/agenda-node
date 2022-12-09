const getUserByEmailAndPassword = require('../services/loginService')

exports.Login = async (req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    let user = await getUserByEmailAndPassword(email, password)
    console.log(user.length > 0 ? true : false)
    res.send(await getUserByEmailAndPassword())
};