const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    permissions: {
        type: String,
        required: true,
    },

},
    
    {timestamps: true});

const authUser = mongoose.model("authUser", userSchema);
module.exports = authUser;