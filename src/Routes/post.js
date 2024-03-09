const postController = require("../Controller/post");
const Express = require("express");
const router = Express.Router();


router.get("/post", postController.getAllPosts);
router.post("/post", postController.createPost);
router.patch("/post:id", postController.updatePost);
router.get("/post:id", postController.getPostById);
router.delete("/post:id", postController.deletePost)


module.exports = router;