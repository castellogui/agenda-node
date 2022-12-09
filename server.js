const http = require('http');
const app = require('./app');
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const PORT_HTTP = process.env.PORT_HTTP || 8080;
const httpServer = http.createServer(app);
httpServer.listen(PORT_HTTP, () => {
    console.log(`Http server has been initialized on port ${PORT_HTTP}.`)
});
