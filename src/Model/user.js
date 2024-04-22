import { Schema, model } from "mongoose";
const UserSchema = new Schema({
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
const user = model("user", UserSchema);
export default user;
