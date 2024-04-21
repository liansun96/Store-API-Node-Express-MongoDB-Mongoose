const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllPouductsStatic,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllPouductsStatic);

module.exports = router;
