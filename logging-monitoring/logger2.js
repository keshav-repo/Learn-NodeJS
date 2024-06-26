// logger.js
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const transport = new transports.DailyRotateFile({
    filename: 'log/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '5m',
    maxFiles: '14d'
});

const logger = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        transport
    ]
});

module.exports = logger;
