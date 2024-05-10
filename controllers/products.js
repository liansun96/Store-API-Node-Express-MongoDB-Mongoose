const Product = require("../models/product");

const getAllPouductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });

  res.status(200).json({ products, nbHit: products.length });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({ featured: true });

  res.status(200).json({ msg: "products testing route" });
};

module.exports = { getAllProducts, getAllPouductsStatic };
