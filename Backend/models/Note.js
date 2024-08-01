const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema= new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'  
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default:"General"
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('notes', NotesSchema); // User is the collection name in MongoDB, 'userSchema' is the schema for this collection. This schema defines the structure of the documents in the collection.  This model is used to interact with the User collection in MongoDB.  mongoose automatically creates indexes for the unique fields.  The unique field in this case is 'email'.  If you try to insert a document with an existing 'email', mongoose will throw an error
