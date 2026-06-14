// @ts-ignore
const swaggerJsdoc = require('swagger-jsdoc');
// @ts-ignore
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tebak Angka API',
      version: '1.0.0',
      description: 'API sederhana untuk main tebak angka berdasarkan nama',
    },
  },
  apis: ['./index.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};