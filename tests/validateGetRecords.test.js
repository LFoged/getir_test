import validateGetRecords from '../src/utils/validateGetRecords.js';

const VALID_INPUT = { startDate: '2016-01-26', endDate: '2016-01-31', minCount: 5, maxCount: 3 };
const INVALID_INPUTS = { startDate: null, endDate: true, minCount: {}, maxCount: [] };
const RELEVANT_ERRORS = [
    { key: 'startDate', details: ['\"startDate\" should be a string.', '\"startDate\" should be in YYYY-MM-DD format.'] },
    { key: 'endDate', details: ['\"endDate\" should be a string.', '\"endDate\" should be in YYYY-MM-DD format.'] },
    { key: 'minCount', details: ['\"minCount\" should be a number.'] },
    { key: 'maxCount', details: ['\"maxCount\" should be a number.'] },
];
const ALL_ERRORS = [
    {
        key: 'startDate',
        details: ['\"startDate\" is required.', '\"startDate\" should be a string.', '\"startDate\" should be in YYYY-MM-DD format.'],
    },
    {
        key: 'endDate',
        details: ['\"endDate\" is required.', '\"endDate\" should be a string.', '\"endDate\" should be in YYYY-MM-DD format.'],
    },
    { key: 'minCount', details: ['\"minCount\" is required.', '\"minCount\" should be a number.'] },
    { key: 'maxCount', details: ['\"maxCount\" is required.', '\"maxCount\" should be a number.'] },
];

describe('validateGetRecords', () => {
    it('returns object with array of all errors, if passed an empty object.', () => {
        expect(validateGetRecords({})).toEqual({ errors: ALL_ERRORS });
    });

    it('returns object with array of relevant errors, if passed an object with all wrong types.', () => {
        expect(validateGetRecords(INVALID_INPUTS)).toEqual({ errors: RELEVANT_ERRORS });
    });

    it('returns same object as passed, if ALL inputs pass validation checks', () => {
        expect(validateGetRecords(VALID_INPUT)).toEqual(VALID_INPUT);
    });
});
