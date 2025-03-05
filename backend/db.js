const mongoose = require('mongoose');

let isConnected = false; // Reuse connection across warm invocations

const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }

    console.log('Using MONGO_URI:', process.env.MONGO_URI);

    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000, // More time for first connection
        });

        isConnected = true;  // Mark as connected
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        throw err;  
    }
};

module.exports = connectDB;
