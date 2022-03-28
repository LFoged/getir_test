import logger from '../utils/logger.js';
import { disconnectDB } from '../services/dbClient.js';

// close DB connection & terminate process
const shutdown = () => {
    logger('\n\nLOG: disconnecting DB');
    disconnectDB()
        .then(() => logger('LOG: DB disconnected'))
        .catch((err) => logger(`ERROR: failed to disconnect DB gracefully\n${err}`))
        .finally(() => {
            logger('LOG: forcibly exiting process');

            process.exit(1);
        });
};

export default () => {
    process.on('uncaughtException', (error) => {
        logger(`\n\nFATAL ERROR: ${error.message}`);

        if (process.env.NODE_ENV === 'development') {
            logger(`\n${error.stack}`);
        }

        shutdown();
    });
    
    // catch rejections and throw as exceptions (handled above)
    process.on('unhandledRejection', (error) => {
        throw error;
    });

    process.on('SIGINT', () => shutdown());

    process.on('SIGTERM', () => shutdown());
};
