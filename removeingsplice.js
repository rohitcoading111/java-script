function removing(){
    let arr = [1,2,3,5,4,6,7,8,9];
    let result = arr.splice(2,1)
    for(let i = 0; i<result.length; i++){
        console.log(result[i]);
    }
}
removing()
