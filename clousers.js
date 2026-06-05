let value = function(){
    let a = 10;
    let b = 20;
    return function(){
        return a + b;
    }
}
console.log(value()());
