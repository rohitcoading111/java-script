function outer(){
    return function inner(val){
        console.log("good morning ",val);   
    }
}
outer()("rohit");
