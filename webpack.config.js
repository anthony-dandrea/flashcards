/* eslint-env node */

var environment = process.env.NODE_ENV || 'development';

require('babel-core/register');
module.exports = require('./config/webpack.' + environment);
