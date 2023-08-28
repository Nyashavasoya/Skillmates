const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,

}
module.exports = corsOptions;