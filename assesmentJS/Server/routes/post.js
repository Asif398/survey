const router = require("express").Router();
const verifyToken = require("../middleware/token");
const {
  createPost,
  getAllPost,
  getMyPost,
  likePost,
  unlikePost,
  commentOnPost,
  deletePost,
  updatePost
} = require("../controllers/post");

router.post("/createpost", verifyToken, createPost);
router.get("/post/all", verifyToken, getAllPost);
router.get("/post/mypost", verifyToken, getMyPost);
router.put("/post/like", verifyToken, likePost);
router.put("/post/unlike", verifyToken, unlikePost);
router.put("/post/comment", verifyToken, commentOnPost);
router.delete("/deletepost/:postId", verifyToken, deletePost);
router.put("/updatepost/:postId", verifyToken, updatePost);

// router.get("/deletepost/:postId", verifyToken, deleteComment);






module.exports = router;
