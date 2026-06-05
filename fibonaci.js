function fibonaci(n){
    if(n==0 || n == 1){
        return n;
    }
    else{
        n = fibonaci(n-1) + fibonaci(n-2);
    }
 return n;
}
console.log(fibonaci(3));
