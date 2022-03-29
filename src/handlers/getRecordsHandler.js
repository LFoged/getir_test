import getRecords from '../services/getRecords.js';
import validateInputs from '../utils/validateGetRecords.js';
import formatFilterRecords from '../utils/formatFilterRecords.js';

export default async ({ body }, res, next) => {
    // validate here instead of middleware for simplicity & testability
    const { startDate, endDate, minCount, maxCount, errors } = validateInputs(body);
    if (errors && errors.length) {
        return next({ code: 400, errors });
    }

    try {
        const records = await getRecords({ startDate, endDate });
        if (!(records && records.length)) {
            return next({ code: 404, msg: 'No records matching the specified "startDate" and "endDate" found.' });
        }
    } catch (error) {
        return next(error);
    }

    const filteredRecords = formatFilterRecords({ records, minCount, maxCount });
    if (!filteredRecords.length) {
        return next({ code: 404, msg: 'No records matching the specified "minCount" and "maxCount" found.' });
    }

    return res.status(200).json({
        code: 0,
        msg: 'Success',
        totalMatches: filteredRecords.length,
        records: filteredRecords,
    });
};
