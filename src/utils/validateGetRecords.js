const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const SCHEMA = { startDate: 'string', endDate: 'string', minCount: 'number', maxCount: 'number' };

export default (reqBody = {}) => {
    const errors = Object.keys(SCHEMA).reduce((acc, key) => {
        const input = reqBody[key];
        const details = [];

        // check that key is present
        if (input === undefined) {
            details.push(`"${key}" is required.`);
        }

        // check input type matches type specified in schema
        if (typeof input !== SCHEMA[key]) {
            details.push(`"${key}" should be a ${SCHEMA[key]}.`);
        }

        // check date inputs are in correct format
        if ((SCHEMA[key] === 'string') && !DATE_REGEX.test(input)) {
            details.push(`"${key}" should be in ${DATE_FORMAT} format.`);
        }

        // check minCount <= maxCount
        if (Number.isFinite(reqBody.minCount && reqBody.maxCount) && (reqBody.minCount > reqBody.maxCount)) {
            details.push('"minCount" should be less than, or equal to, "maxCount".');
        }

        return details.length ? [...acc, { key, details }] : acc;
    }, []);
    
    return errors.length ? { errors } : reqBody;
};
