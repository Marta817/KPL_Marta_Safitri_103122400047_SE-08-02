// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu Makanan API',
      version: '1.0.0',
      description: 'Dokumentasi API Menu Makanan',
    },
  },
  apis: ['./index.js'], // pastikan path benar
};

const specs = swaggerJsdoc(options);

// ✅ export di akhir (ESM)
export { specs, swaggerUi };