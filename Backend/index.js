// index.js

const connectToMongo = require('./db');

const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

connectToMongo();


app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// Call connectToMongo function to connect to MongoDB


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
