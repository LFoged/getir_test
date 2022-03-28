import { MongoClient } from 'mongodb';

const DB = {
    URI: 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
    NAME: 'getir-case-study',
    COLLECTION: 'records',
};

const dbClient = new MongoClient(DB.URI);

const connectDB = async () => {
    // connecto to DB server & verify connection
    await dbClient.connect();
    await dbClient.db(DB.NAME).command({ ping: 1 });
};

const disconnectDB = async () => dbClient.close();

const recordsCollection = dbClient.db(DB.NAME).collection(DB.COLLECTION);

export { connectDB, disconnectDB, recordsCollection };
