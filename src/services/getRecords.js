import { recordsCollection } from './dbClient.js';

export default async ({ startDate = '', endDate = '' }) => {
    const query = {
        createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
        },
    };

    return recordsCollection.find(query).toArray();
};
