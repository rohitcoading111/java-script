let f1 = function parent(){
    let check = true;
    return function(){
        if(check==false){
        return "fnc already executed one time "
       }
        check = false;
        return "i am executed"
}
}
let x = f1();
console.log(x());
console.log(x());

