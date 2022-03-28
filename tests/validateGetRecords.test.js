import validateGetRecords from '../src/utils/validateGetRecords.js';

describe('validateGetRecords', () => {
    it('returns empty array when passed no arguments', () => {
        expect(validateGetRecords()).toEqual([]);
    });
});
