// app.js
const express = require('express');
const logger = require('./logger2');

const app = express();
const port = 3000;

// Example route
app.get('/', (req, res) => {
    logger.info('Home route accessed');
    logger.error('Home route accessed');
    logger.debug('Home route accessed');
    logger.warn('Home route accessed');
    res.send('Hello World!');
});

// Error handling example
app.use((err, req, res, next) => {
    logger.error(`Error occurred: ${err.message}`);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    logger.info(`Server started and listening on port ${port}`);
});

