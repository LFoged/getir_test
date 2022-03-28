import formatFilterRecords from '../src/utils/formatFilterRecords.js';

const DEFAULT_VALUES = [{ createdAt: '', key: '', totalCount: 0 }];

describe('formatFilterRecords', () => {
    it('returns an array with a single object of default values, when passed empty Object', () => {
        expect(formatFilterRecords({})).toEqual(DEFAULT_VALUES);
    });
});
