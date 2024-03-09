const postController = require("../Controller/post");
const Express = require("express");
const postRouter = Express.Router();

postRouter.get("/", postController.getAllPosts);
postRouter.post("/", postController.createPost);
postRouter.patch("/:id", postController.updatePost);
postRouter.get("/:id", postController.getPostById);
postRouter.delete("/:id", postController.deletePost)


module.exports = postRouter;