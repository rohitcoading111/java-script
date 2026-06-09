let arr1 = [1,2,3]
let arr2 = [4,5,6]
function merge(){
  let merged = [...arr1,...arr2]
  return merged;
}
console.log(merge());
