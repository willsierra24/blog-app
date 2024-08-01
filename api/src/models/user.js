const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{timestamps:true});

const userdb = new mongoose.model("users",userSchema);

module.exports = userdb;

// //HASH Y SALT
// userSchema.plugin(passportLocalMongoose)
// // Add find or create to schema
// userSchema.plugin(findOrCreate)

// module.exports = mongoose.model('users', userSchema)