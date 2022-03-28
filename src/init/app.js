import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import responseHeaders from '../middleware/setResHeaders.js';
import expressErrorHandler from './expressErrorHandler.js';
import getRecordsHandler from '../handlers/getRecordsHandler.js';

const app = express();
// external middleware
app.use([helmet(), compression(), express.json()]);
// set response headers
app.use(responseHeaders);

// routes
app.post('/api/records', getRecordsHandler);
// 404 forwarded to express error handler
app.use((req, res, next) => next({ code: 404 }));
// express error handler
app.use(expressErrorHandler);

export default app;
