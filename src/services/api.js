const axios = require('axios');

const { ENDPOINT } = require('../config/auth');

const api = axios.create(ENDPOINT);

module.exports = api;
