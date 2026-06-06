function fn(){
    console.log("running");
}

function f1(fn){
    let wait = true
    return function f2(){
             if(!wait){
                return;
             }
             else{
                fn()
                wait = false;
             }
            setTimeout(() => {
                wait = true;
            }, 1000);
    }
}

let x = f1(fn);

x();

setTimeout(() => x(), 500);
setTimeout(() => x(), 1500);
setTimeout(() => x(), 2500);