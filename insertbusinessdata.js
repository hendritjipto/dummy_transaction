/* mySeedScript.js */

// require the necessary libraries

import {
    MongoClient
} from 'mongodb';

import businessData from './businessiddata.js';
import transactionHistory from './transactionhistory.js';

async function seedDB() {
    // Connection URL
    const uri = "mongodb://root:example@localhost:27017/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const database = await client.db("xendit");

        try {
            await database.createCollection("transaction_business");

        } catch (error) {
            console.log("Collection is available");
        }

        const collection = await database.collection("transaction_business");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.

        //collection.drop();

        // make a bunch of time series data
        let timeSeriesData = [];

        for (let y = 0; y < 100; y++) {

            for (let i = 0; i < 100000; i++) {

                timeSeriesData.push(businessData());

            }
            const hrstart = process.hrtime();

            await collection.insertMany(timeSeriesData);

            const hrend = process.hrtime(hrstart);
            console.log(`Execution time (hr): ${hrend[0]}s ${hrend[1] / 1000000}ms`);

            timeSeriesData = [];
        }

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();
