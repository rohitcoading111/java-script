function removing(){
    let arr = [1,2,3,5,4,6,7,8,9];
    let result = arr.splice(1,0,2)
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
removing()
