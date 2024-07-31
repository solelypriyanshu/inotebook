// db.js

const mongoose = require('mongoose');

// Replace 'your_database_uri' with your actual MongoDB connection string
const uri = 'mongodb://localhost:27017/inotebook';



const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
