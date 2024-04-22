import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: [true,"user name is already in use"],
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

const authUser = model("authUser", userSchema);
export default authUser;