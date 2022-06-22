const products = [
  {
    id: 1,
    description: 'Red Shoe',
    price: 42.12,
  },
  {
    id: 2,
    description: 'Blue Jeans',
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === +id);
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
