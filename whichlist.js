const wishlist = [];

function addItem(item) {
  if (!wishlist.includes(item)) {
    wishlist.push(item);
    console.log(item + " Added");
  } else {
    console.log(item + " Already Exists");
  }
}

addItem("Laptop");
addItem("Phone");
addItem("Laptop");

console.log(wishlist);