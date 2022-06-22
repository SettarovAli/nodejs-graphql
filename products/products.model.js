const products = [
  {
    id: 1,
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 2,
    description: 'Blue Jeans',
    price: 55.55,
    reviews: [],
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

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reiews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    product.reviews.push({ rating, comment });
  }
  return product;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
