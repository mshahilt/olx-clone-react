const express = require("express");
const router = express.Router();
const {
  insertCategory,
  getCategoryFields,
} = require("../controllers/categoryController");

router.post("/insert", insertCategory);

router.get("/:name", getCategoryFields);

module.exports = router;
