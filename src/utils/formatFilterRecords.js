// set min-/maxCount to -1, so 'totalCount' doesn't pass 'filter' stage by default
// response should be [] when no arguments passed
export default ({ records = [{}], minCount = -1, maxCount = -1 } = {}) => records
    .map(({ key = '', createdAt = '', counts = [] }) => ({
        key,
        createdAt,
        totalCount: counts.reduce((acc, curr) => acc + curr, 0),
    }))
    .filter(({ totalCount }) => (totalCount >= minCount) && (totalCount <= maxCount));
