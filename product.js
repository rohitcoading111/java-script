const products = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Mobile"
];

function searchProduct(keyword) {
  const result = [];

  for (let product of products) {
    if (product.toLowerCase().includes(keyword.toLowerCase())) {
      result.push(product);
    }
  }

  console.log(result);
}

searchProduct("mo");