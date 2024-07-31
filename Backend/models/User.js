const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);
module.exports= User

// User is the collection name in MongoDB, 'userSchema' is the schema for this collection. This schema defines the structure of the documents in the collection.  This model is used to interact with the User collection in MongoDB.  mongoose automatically creates indexes for the unique fields.  The unique field in this case is 'email'.  If you try to insert a document with an existing 'email', mongoose will throw an error
