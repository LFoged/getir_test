import processErrorHandler from './init/processErrorHandler.js';
import logger from './utils/logger.js';
import app from './init/app.js';
import { connectDB } from './services/dbClient.js';

// handle unhandledExceptions & uncaughtRejections
processErrorHandler();

const PORT = process.env.PORT || 4000;

// no try/catch. Crash on error at this level => handled in processErrorHandler
const init = async () => {
    logger('LOG: connecting to DB');
    // await connectDB();
    logger('LOG: DB connected');
    
    app.listen(PORT, () => logger(`LOG: server running on port ${PORT}`));
};

init();
