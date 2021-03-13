const buildDevLogger = require('./devlogger');
const buildProdLogger = require('./prodlogger');
const dotenv = require('dotenv').config();

let logger = null;
if (process.env.NODE_ENV === 'development') {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

module.exports = logger;