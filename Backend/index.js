const connectToMongo = require('./db');
var cors = require('cors');

const express = require('express')
const app = express()
const port = 8000

app.use(express.json());
app.use(cors());

connectToMongo();


app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// Call connectToMongo function to connect to MongoDB


// Start the server
app.listen(port, () => {
    console.log(`iNotebook backend is listening at http://localhost:${port}`);
});
