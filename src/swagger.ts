import swaggerJsdoc from 'swagger-jsdoc';


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'rcipes-api',
            version: '1.0.0',
            description: 'api rest to manage recipes',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/apps/recipes/entry-points/api/*.ts'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;