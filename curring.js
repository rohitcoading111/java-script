function a1(a){
    return function b(b){
          return a+b;
    }
}
console.log(a1(10)(20));
