function countKeys(obj) {
  let count = 0;

  for (let key in obj) {
    count++;
  }

  return count;
}

const user = {
  name: "Rohit",
  age: 20,
  city: "Delhi"
};

console.log(countKeys(user)); 