const serverless = require('serverless-http');
const app = require('./app');
const connectDB = require('./db'); 

let isColdStart = true;  // Track cold start

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false; // Prevent Lambda from closing DB connection

    if (isColdStart) {
        console.log('Cold Start Detected');
        isColdStart = false;  // This flag flips after the first request
    }

    try {
        await connectDB();  // Always make sure DB connection is alive

        const handler = serverless(app);
        return await handler(event, context);
    } catch (err) {
        console.error('Lambda Handler Error:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error', error: err.message }),
        };
    }
};
