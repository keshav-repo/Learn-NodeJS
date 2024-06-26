// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Define a custom format for log messages
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

// Create a Winston logger
const logger = createLogger({
    level: 'debug', // Set the default log level
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        // Log to console
        new transports.Console(),
        // Log to a file
        new transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
