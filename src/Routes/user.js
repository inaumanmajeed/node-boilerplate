import { getAllUsers, getUser, updateUser, deleteUser, postUser } from "../Controller/user";
import { Router } from "express";
const router = Router();

router.get("/", getAllUsers); // show all users data
router.post("/", postUser); // create new user data
router.get("/:id", getUser); // show user data by id
router.patch("/:id", updateUser); // update user by id
router.delete("/:id", deleteUser); // delete user by id

export default router;