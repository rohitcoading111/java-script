function myForeach(arr,callback){
  for(let i = 0; i< arr.length; i++){
     callback(arr[i])
  }
}
myForeach(
   [1,2,3],
   x => console.log(x/2)
);
