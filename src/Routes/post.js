import { getAllPosts, createPost, updatePost, getPostById, deletePost } from "../Controller/post";
import { Router } from "express";
const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.post("/", createPost);
postRouter.patch("/:id", updatePost);
postRouter.get("/:id", getPostById);
postRouter.delete("/:id", deletePost)


export default postRouter;