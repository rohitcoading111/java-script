function sorting(){
    let arr = [1,2,3,5,4,6,7,8,9];
    let result =  arr.sort((a,b)=>(a-b))
    for(let i = 0; i<arr.length; i++){
        console.log(result[i]);
    }
}
sorting()
