const axios = require('axios')
const api = axios.create('http://srv-webservice-dev.tsagro.com:2009/api/')

module.exports = api