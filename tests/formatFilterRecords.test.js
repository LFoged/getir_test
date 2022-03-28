import formatFilterRecords from '../src/utils/formatFilterRecords.js';

const FILTER = {
    ALL_WRONG_INPUTS: {
        records: [
            { key: '12345', createdAt: '2002-11-01', counts: [17, 2, 3] },
            { key: '54321', createdAt: '1999-03-22', counts: [3, 10, 12, -7] },
            { key: 'abcde', createdAt: '2002-11-01', counts: [25, 0, 99, 3000] },
        ],
        minCount: 40,
        maxCount: 44,
    },
    ALL_CORRECT_RESULT: [
        { key: '12345', createdAt: '2002-11-01', totalCount: 22 },
        { key: '54321', createdAt: '1999-03-22', totalCount: 18 },
        { key: 'abcde', createdAt: '2002-11-01', totalCount: 3124 },
    ],
};

describe('formatFilterRecords', () => {
    it('returns empty array when passed no arguments', () => {
        expect(formatFilterRecords()).toEqual([]);
    });

    it('returns empty array when passed empty object', () => {
        expect(formatFilterRecords({})).toEqual([]);
    });

    it('returns empty array when NO records pass min-/maxCount filter', () => {
        expect(formatFilterRecords(FILTER.ALL_WRONG_INPUTS)).toEqual([]);
    });

    // increase min-/maxCount to make all records pass filter
    it('returns array of correctly formatted records when ALL pass min-/maxCount filter', () => {
        expect(formatFilterRecords({ ...FILTER.ALL_WRONG_INPUTS, minCount: 10, maxCount: 4000 }))
            .toEqual(FILTER.ALL_CORRECT_RESULT);
    });

    // set min-/maxCount to allow 2 records to pass filter
    it('returns array with correct number of records when SOME pass min-/maxCount filter', () => {
        expect(formatFilterRecords({ ...FILTER.ALL_WRONG_INPUTS, minCount: 10, maxCount: 2000 })).toHaveLength(2);
    });
});
