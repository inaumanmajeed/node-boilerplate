const userController =require( "../Controller/user")
const express =require( "express");
const router = express.Router();

router.get("/", userController.getAllUsers); //show all users data
router.post("/", userController.postUser); //create new user data
router.get("/:id", userController.getUser); //show user data by id
router.patch("/:id", userController.updateUser); //update user by id
router.delete("/:id", userController.deleteUser); //delete user by id


module.exports = router;