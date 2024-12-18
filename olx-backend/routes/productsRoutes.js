const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.post("/add", productController.addProduct);
router.get("/", productController.getProducts);


module.exports = router;
