module.exports = getUserByEmailAndPassword = async (email, password) => {
    const connect = require('../config/databaseConnection')
    const conn = await connect();
    const sql = `select * from users where email = ? and password = ?`
    const values = [email, password]
    const [rows] = await conn.query(sql, values)
    return await rows;
}