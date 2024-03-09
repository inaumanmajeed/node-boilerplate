const userController =require( "../Controller/user")
const express =require( "express");
const router = express.Router();


router.get("/", userController.getAllUsers);
router.post("/", userController.postUser);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;