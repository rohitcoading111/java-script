let arrA = [1, 2];
let arrB = [1, 2];

function appendElement(array) {
  array.push(3);
}

appendElement(arrA);
appendElement([...arrB]); 

console.log(arrA); 
console.log(arrB); 
