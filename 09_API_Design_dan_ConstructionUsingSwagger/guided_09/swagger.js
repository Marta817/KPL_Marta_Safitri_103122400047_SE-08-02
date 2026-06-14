// @ts-ignore
import { title } from 'node:process';
// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';
// @ts-ignore
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: ' 3.0.0',
        info: {
             title: 'Film yang Ditonton',
             version: '1.0.0',
             description: 'API sederhana dari Express untuk film-film yang pernah ditonton'
        },
    },
    apies: ['app.js'],
};

const specs = swaggerJsdoc(options);

export{
    specs,
    swaggerUi,
};