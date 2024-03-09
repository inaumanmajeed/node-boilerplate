const userModel = require('../Model/user');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        res.status(200).json({
            success: true,
            message: "All Users data",
            data: allUsers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching users data",
            error: error.message
        });
    }
};

const getUser = async (req, res) => {
    try {
        const getUser = await userModel.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "User data",
            data: getUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching user data",
            error: error.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: "User data updated",
            data: updateUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user data",
            error: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "User data deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user data",
            error: error.message
        });
    }
};

const postUser = async (req, res) => {
    try {
        const userData = await userModel.create(req.body);
        res.status(200).json({
            success: true,
            message: "User data inserted",
            data: userData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error inserting user data",
            error: error.message
        });
    }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser, postUser };
