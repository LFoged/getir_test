import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import formatFilterRecords from '../src/utils/formatFilterRecords.js';

describe('formatFilterRecords', () => {
    it('should return 0 for "totalcount" if counts array is empty', () => {
        expect(formatFilterRecords({ records: [{ key: '12345', createdAt: '2020-11-10', counts: [0] }] })).toBe([0]);
    });
});
