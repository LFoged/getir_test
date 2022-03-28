// set default values for 'min-/maxCount' to -1, so 'totalCount' fails 'filter'
// response should be [] when no arguments, or an empty object is passed
export default ({ records = [{}], minCount = -1, maxCount = -1 } = {}) => records
    .map(({ key = '', createdAt = '', counts = [] }) => ({
        key,
        createdAt,
        totalCount: counts.reduce((acc, curr) => acc + curr, 0),
    }))
    .filter(({ totalCount }) => (totalCount >= minCount) && (totalCount <= maxCount));
