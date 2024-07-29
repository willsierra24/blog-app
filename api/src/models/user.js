const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // googleId: {
    //     type: String,
    //     required: true
    // },
    // secret: {
    //     type: String,
    //     required: true
    // }
});

//HASH Y SALT
userSchema.plugin(passportLocalMongoose)
// Add find or create to schema
userSchema.plugin(findOrCreate)

module.exports = mongoose.model('User', userSchema)