let lastId = 1000;

function generateId() {
  lastId++;
  return "EMP" + lastId;
}

console.log(generateId()); // EMP1001
console.log(generateId()); // EMP1002
console.log(generateId()); // EMP1003