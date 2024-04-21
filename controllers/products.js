const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products testing route" });
};

const getAllPouductsStatic = async (req, res) => {
  res.status(200).json({ msg: "porducts route" });
};

module.exports = { getAllProducts, getAllPouductsStatic };
