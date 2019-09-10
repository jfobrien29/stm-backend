import * as winston from 'winston';
import { config } from '.';

const timestamp = () => (new Date().toUTCString());

// provide various log responses
const logger = new winston.loggers({
    transports: [
        // Write to specific console
        new winston.transports.Console({
            name: 'console',
            level: config.LOGGER.LEVEL,
            timestamp: timestamp(),
            colorize: true,
            silent: config.LOGGER.SILENT as boolean,
        }),
    ]
});

export { logger };