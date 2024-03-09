const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    postTitle:{
        type: String,
        required: [true, "Post title is required"]
    },
    postData:{
        type: String,
        required: true
    }
});

const post = mongoose.model("post", postSchema);
module.exports = post;