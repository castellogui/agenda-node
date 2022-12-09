module.exports = {
    authUserByEmailAndPassword: async (email, password) => {
        try {
            const connect = require('../config/databaseConnection')
            const bcrypt = require('bcrypt')
            const conn = await connect();
            const sql = `select * from users where email = ?`
            const [rows] = await conn.query(sql, [email])
            if (rows.length > 0) {
                let user = rows[0]
                if (await bcrypt.compare(password, user.password)) {
                    return { auth: true }
                }
            }
            return { auth: false }
        } catch (err) {
            return { message: 'There was an error while trying to auth user information.', err }
        }
    },

    getTokenJWT: () => {

    }
}
