const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router
  .route("/")
  .post(categoryController.addCategory)
  .get(categoryController.getCategories)


router
  .route("/:categoryId")
  .delete(categoryController.deleteCategory)
  .patch(categoryController.updateCategory);




module.exports = router;
