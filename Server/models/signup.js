const mongoose = require("mongoose");

// Schema for Products Collection
const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassowrd: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    }

});
const User = mongoose.model("User", signupSchema);


module.exports = User;