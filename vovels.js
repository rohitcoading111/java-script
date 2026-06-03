let vovels = function(a){
    let count = 0;
    let vovels = ["a","e","i","o","u"];
    for(let i = 0; i<a.length; i++){
        let char = a[i];
        if(vovels.includes(char)){
            count++;
        }
    }

    return count;
    
}
console.log(vovels("aeiou"));
