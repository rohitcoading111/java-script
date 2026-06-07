function myReduce(arr,acc,callback){
    let result;
     for(let i = 0; i<arr.length; i++){
       result = callback (acc,arr[i]);
       acc = result;
     }
     return acc;
}
console.log(myReduce(
  [1,2,3,4],
  0,
  (acc, curr) => acc + curr
));
