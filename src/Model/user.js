const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Username must be required"],
        unique: [true,"username is already in use"],
    },
    password:{
        type: String,
        required: true,
    },
    fullName:{
        type: String,
    }
});
const user = mongoose.model("user", UserSchema);
module.exports = user;
