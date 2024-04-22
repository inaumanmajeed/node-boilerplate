import { find, findById, findByIdAndUpdate, findByIdAndDelete, create } from '../Model/user';

//function to show all users
async function getAllUsers(req, res) {
    try {
        const allUsers = await find({});
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
}

//function to show user by ID
const getUser = async (req, res) => {
    try {
        const getUser = await findById(req.params.id);
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

//function to update user data by id
const updateUser = async (req, res) => {
    try {
        const updateUser = await findByIdAndUpdate(req.params.id, req.body, { new: true });
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

//function to delete a user by id
const deleteUser = async (req, res) => {
    try {
        await findByIdAndDelete(req.params.id);
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

//function to create new user
const postUser = async (req, res) => {
    try {
        const userData = await create(req.body);
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

export default { getAllUsers, getUser, updateUser, deleteUser, postUser };
