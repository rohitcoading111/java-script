let arr = [1,2,3,4,5];
let val = 5;
function findvalue(){
    let find = false
   for(let i = 0; i<arr.length; i++ ){
       if(arr[i]===val){
          console.log("exist");
          find = true
       }
   }
   if(find==false){
    return "value is not exist"
   }
}
findvalue()
