function myFilter(arr,callback){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
      let result =  callback(arr[i]);
       if (result===true) {
          newArr.push(arr[i])
       }
    }
    return newArr;
}
console.log(myFilter([1,2,4,6,8], x => x>5));
