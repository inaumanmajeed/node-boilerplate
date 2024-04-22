import { Schema, model } from "mongoose";
const postSchema = new Schema({
    postTitle:{
        type: String,
        required: [true, "Post title is required"]
    },
    postData:{
        type: String,
        required: true
    }
});

const post = model("post", postSchema);
export default post;