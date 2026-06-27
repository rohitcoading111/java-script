const cart = [
  { id: 1, name: "Phone", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 }
];

function increaseQty(id) {
  for (let item of cart) {
    if (item.id === id) {
      item.qty++;
    }
  }
}
