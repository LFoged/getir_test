import formatFilterRecords from '../src/utils/formatFilterRecords.js';

describe('formatFilterRecords', () => {
    it('returns an empty array when passed no arguments', () => {
        expect(formatFilterRecords()).toEqual([]);
    });

    it('returns an empty array when passed empty Object', () => {
        expect(formatFilterRecords({})).toEqual([]);
    });
});
