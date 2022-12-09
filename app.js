const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const blankRoute = require('./src/routes/blankRoute')

app.use(bodyParser.json());
app.use(cors())
app.use('/', blankRoute);
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    });
});

module.exports = app;