function fact(n){
  let original = n;
  if(stored[n]){
    console.log("value hai" );
    return stored[n]
  }
   else if(n==1){
        return 1;
    }
    else{
         n = n*fact(n-1);
    }
    stored[original] = n
    return n
}
let stored = {};
console.log(fact(5));
console.log(fact(5));

