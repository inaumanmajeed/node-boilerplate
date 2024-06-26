import { find, create, findByIdAndUpdate, findById, findByIdAndDelete } from "../Model/post";

// function to show all posts
const getAllPosts = async(req, res) => {
    try {
        const allPosts = await find({});
        res.status(200).json({
            success: true,
            message: "All posts data",
            data: allPosts          
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching posts",
            error: error.message
        });
    }
};

// function to create new post
const createPost = async(req, res) => {
    try {
        const postData = await create(req.body);
        res.status(200).json({
            success: true,
            message: "Posted",
            data: postData
        });
    } catch {
        res.status(500).json({
            success: false,
            message: "Error posting",
            error: error.message
        })
    }
};

// function to update post
const updatePost = async (req, res) => {
    try {
        const updateData = await findByIdAndUpdate(req.param.body, req.body, {new: true});
        res.status(200).json({
            success: true,
            message: "Post updated",
            data: updateData
        });
    } catch {
        res.status(500).json({
            success: false,
            message: "Error updating post",
            error: error.message
        });
    }
};

// function to get post by id
const getPostById = async(req, res) => {
    try {
        const postByIdData = await findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "post fetched",
            data: postByIdData
        });
    } catch {
        res.status(500).json({
            success: false,
            message: "Error fetching post",
            error: error.message
        });
    }
};

// function to delete post
const deletePost = async(req, res) => {
    try {
        const deleteData = await findByIdAndDelete(req.param.id);
        res.status(200).json({
            success: true,
            message: "Post deleted"
        });
    } catch {
        res.status(500).json({
            success: false,
            message: "Error deleteing Post",
            error: error.message
        });
    }
};


export default {getAllPosts, createPost, updatePost, getPostById, deletePost}