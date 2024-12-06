import 'module-alias/register';
import 'reflect-metadata';
import express from 'express';
import recipesAPI from '@api/recipesAPI';

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
const PORT = process.env.PORT_DEV || 3000;

// Middleware to parse JSON
app.use(express.json());

// swagger integration
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use('/recipes', recipesAPI);

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});