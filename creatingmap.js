function myMap(arr,callback){
let newArr = [];
for(let i = 0; i<arr.length;i++){
    let result = callback(arr[i]);
    newArr.push(result)
 }
 return newArr;
}
console.log(myMap([1,2,3,4],x => x+5));
