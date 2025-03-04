const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let isConnected = false;  // Track connection across invocations (helps warm Lambda functions)

// const logAllIndexes = async () => {
//     const indexes = await mongoose.connection.db.collection('users').getIndexes();
//     console.log("Current Indexes in Lambda (direct from DB):", indexes);
// };

const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }
    console.log('Using MONGO_URI:', process.env.MONGO_URI);
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000
        });
        isConnected = true;
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        throw err;
    }
};

// Ensure DB is connected before handling any request
app.use(async (req, res, next) => {
    await connectDB();
    // await logAllIndexes();
    next();
});

module.exports = app;
