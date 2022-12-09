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
                    return { auth: true, email: user.email }
                }
            }
            return { auth: false }
        } catch (err) {
            throw err;
        }
    },

    getTokenJWT: (...data) => {
        const jwt = require('jsonwebtoken')
        const dotenv = require('dotenv')
        dotenv.config({ path: '.env' })

        let token = jwt.sign(
            { data },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            }
        );

        return token;
    }
}
