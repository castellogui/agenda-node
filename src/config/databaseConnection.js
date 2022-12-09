async function connect() {
    const dotenv = require('dotenv')
    dotenv.config({ path: '.env' })
    if (global.connection && global.connection.state !== "disconnected") {
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const user = process.env.USER_DATABASE
    const password = process.env.PASSWORD_DATABASE
    const port = process.env.PORT_DATABASE
    const database = process.env.NAME_DATABASE
    const host = process.env.HOST_DATABASE
    const connection = await mysql.createConnection(`mysql://${user}:${password}@${host}:${port}/${database}`)
    console.log("Connected to MySql.");
    global.connection = connection;
    return connection;
}

module.exports = connect

