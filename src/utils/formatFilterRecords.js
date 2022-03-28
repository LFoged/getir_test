export default ({ records = [{}], minCount = 0, maxCount = 1 }) => records
    .map(({ key, createdAt, counts = [] }) => ({
        key,
        createdAt,
        totalCount: counts.reduce((acc, curr) => acc + curr, 0),
    }))
    .filter(({ totalCount }) => (totalCount >= minCount) && (totalCount <= maxCount));
