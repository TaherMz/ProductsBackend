const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .post(productController.addProduct)
  .get(productController.getProducts)


router
  .route("/:productId")
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);




module.exports = router;
