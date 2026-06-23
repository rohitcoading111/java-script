const cart = [
  { id: 1, name: "Phone", price: 10000, qty: 2 },
  { id: 2, name: "Mouse", price: 500, qty: 1 }
];

function getTotalPrice(cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.qty;
  }

  return total;
}

console.log(getTotalPrice(cart)); 