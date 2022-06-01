const axios = require('axios');

const moduitApi = axios.create({
  timeout: 30000,
  baseURL: 'https://screening.moduit.id/',
  headers: { 'Content-Type': 'application/json' },
});

module.exports = moduitApi;