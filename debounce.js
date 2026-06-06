function search(){
    console.log("searching");
}
function f1(search){
    let timer;
    return function f2(){
       clearTimeout(timer);
       timer = setTimeout(() => {
          search()
       }, 2000);
    } 
}
let fn = (f1(search));
fn();